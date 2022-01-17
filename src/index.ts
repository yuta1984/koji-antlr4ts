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
import { KojiDocxDocumentConverter } from './converter/KojiDocxDocumentConverter';
import { ConversionOptions, ConversionRule } from './converter/KojiConverter';
import inlineConversionRules from './converter/inline_rules';
import blockConversionRules from './converter/block_rules';
import { toBlob, toBase64String, toBuffer } from './converter/KojiDocxCompiler';
import { KojiLaTeXConverter } from './converter/KojiLaTeXConverter';

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

export function tokenize(input: string): { tokens: Token[]; errors: KojiParseError[]; } {
	const is = new ANTLRInputStream(input);
	const lexer = new KojiLexer(is);
	const errorHandler = new AccumlateErrorListener();
	lexer.addErrorListener(errorHandler);
	const stream = new CommonTokenStream(lexer);
	stream.fill();
	return { tokens: stream.getTokens(), errors: errorHandler.errors };
}

export function parse(input: string): { ast: KojiDocumentNode; errors: KojiParseError[]; } {
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

export function convertToTEI(ast: KojiDocumentNode): string {
	const xml = convertToXML(ast);
	return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng" type="application/xml"
	schematypens="http://purl.oclc.org/dsdl/schematron"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Title</title>
         </titleStmt>
         <publicationStmt>
            <p>Publication Information</p>
         </publicationStmt>
         <sourceDesc>
            <p>Information about the source</p>
         </sourceDesc>
      </fileDesc>
   </teiHeader>
   ${xml}
</TEI>
	`;
}

export function convertToDocxDocumentXml(ast: KojiDocumentNode, options?: ConversionOptions): string {
	const converter = new KojiDocxDocumentConverter(options);
	return converter.convert(ast);
}

export function convertToLaTeX(ast: KojiDocumentNode, options?: ConversionOptions): string {
	const converter = new KojiLaTeXConverter(options);
	return converter.convert(ast);
}

type TypeName = "blob" | "base64" | "buffer";
type ObjectType<T> =
	T extends "blob" ? Blob :
	T extends "base64" ? string :
	T extends "buffer" ? Buffer :
	never;
export function convertToDocx<T extends TypeName>(ast: KojiDocumentNode, type: T): Promise<ObjectType<T>> {
	if (type === "blob") {
		return toBlob(ast) as Promise<ObjectType<T>>;
	} else if (type === "base64") {
		return toBase64String(ast) as Promise<ObjectType<T>>;
	} else if (type === "buffer") {
		return toBuffer(ast) as Promise<ObjectType<T>>;
	}
}

export const conversionRules: { [elemName: string]: ConversionRule; } = {};
inlineConversionRules.forEach((r) => (conversionRules[r.elemName] = r));
blockConversionRules.forEach((r) => (conversionRules[r.elemName] = r));
