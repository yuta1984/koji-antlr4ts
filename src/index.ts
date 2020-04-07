import { KojiHTMLConverter } from "./converter/KojiHTMLConverter";
import { KojiAstBuilder, KojiASTNode } from "./KojiAstBuilder";
import { KojiParser } from "./KojiParser";
import {
    ANTLRInputStream, CommonTokenStream, ANTLRErrorListener,
    Recognizer,
    RecognitionException
} from "antlr4ts";
import { KojiLexer } from "./KojiLexer";


interface KojiParseError {
    offendingSymbol: any | undefined,
    line: number,
    charPositionInLine: number,
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
        console.log(offendingSymbol);
        this.errors.push({ line, charPositionInLine, msg, offendingSymbol });
    }
}

export function tokenize(input: string): { tokens: CommonTokenStream, errors: KojiParseError[]; } {
    const is = new ANTLRInputStream(input);
    const lexer = new KojiLexer(is);
    const errorHandler = new AccumlateErrorListener();
    lexer.addErrorListener(errorHandler);
    return { tokens: new CommonTokenStream(lexer), errors: errorHandler.errors };
}

export function parse(input: string): { ast: KojiASTNode, errors: KojiParseError[]; } {
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

export function convertToHTML(ast: KojiASTNode): string {
    const converter = new KojiHTMLConverter();
    return converter.convert(ast);
}

