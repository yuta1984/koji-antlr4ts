import { KojiHTMLConverter } from './converter/KojiHTMLConverter';
import { KojiAstBuilder, KojiASTNode, KojiDocumentNode, KojiInlineNode } from './KojiAstBuilder';
import { KojiParser } from './KojiParser';
import {
	ANTLRInputStream,
	CommonTokenStream,
	ANTLRErrorListener,
	Recognizer,
	RecognitionException,
	Token
} from 'antlr4ts';
import { KojiLexer } from './KojiLexer';
import { KojiXMLConverter } from './converter/KojiXMLConverter';
import { ConversionOptions, ConversionRule } from './converter/KojiConverter';
import inlineConversionRules from './converter/inline_rules';
import blockConversionRules from './converter/block_rules';

interface KojiParseError {
	offendingSymbol: any | undefined;
	line: number;
	charPositionInLine: number;
	msg: string;
}

class AccumlateErrorListener implements ANTLRErrorListener<any> {
	errors: KojiParseError[];

	constructor() {
		this.errors = [];
	}

	syntaxError(
		recognizer: Recognizer<any, any>,
		offendingSymbol: any | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		exception: RecognitionException | undefined
	) {
		//console.log(offendingSymbol);
		this.errors.push({ line, charPositionInLine, msg, offendingSymbol });
	}
}

export function tokenize(input: string): { tokens: Token[]; errors: KojiParseError[] } {
	const is = new ANTLRInputStream(input);
	const lexer = new KojiLexer(is);
	const errorHandler = new AccumlateErrorListener();
	lexer.addErrorListener(errorHandler);
	const stream = new CommonTokenStream(lexer);
	stream.fill();
	return { tokens: stream.getTokens(), errors: errorHandler.errors };
}

export function parse(input: string): { ast: KojiDocumentNode; errors: KojiParseError[] } {
	const is = new ANTLRInputStream(input);
	const lexer = new KojiLexer(is);
	const ts = new CommonTokenStream(lexer);
	const parser = new KojiParser(ts);
	const errorHandler = new AccumlateErrorListener();
	lexer.addErrorListener(errorHandler);
	parser.addErrorListener(errorHandler);
	const tree = parser.koji();
	const visitor = new KojiAstBuilder();
	const ast = visitor.visit(tree);
	const errors = errorHandler.errors;
	return { ast, errors };
}

export function convertToHTML(ast: KojiDocumentNode, options?: ConversionOptions): string {
	const converter = new KojiHTMLConverter(options);
	return converter.convert(ast);
}

export function convertToXML(ast: KojiDocumentNode, options?: ConversionOptions): string {
	const converter = new KojiXMLConverter(options);
	return converter.convert(ast);
}

export const conversionRules: { [elemName: string]: ConversionRule } = {};
inlineConversionRules.forEach((r) => (conversionRules[r.elemName] = r));
blockConversionRules.forEach((r) => (conversionRules[r.elemName] = r));
