import { Token } from "antlr4ts/Token";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { BlockContent1Context, BlockContent2Context, BlockContent3Context, BlockContent4Context, BlockContent5Context, InlineContentContext, SyntaxSugarContext, InlineContext, Block1Context, Block2Context, Block3Context, Block4Context, Block5Context, InlineContentSeqContext } from "./KojiParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { KojiParserVisitor } from "./KojiParserVisitor";
import { KojiContext, BlockContext, ListContext } from "./KojiParser";
export declare class KojiAstBuilder extends AbstractParseTreeVisitor<any> implements KojiParserVisitor<any> {
    ast: any;
    constructor();
    defaultResult(): void;
    visit(ctx: KojiContext): any;
    visitList(ctx: ListContext): any;
    visitBlock(ctx: BlockContext): any;
    visitBlock1(ctx: Block1Context): any;
    visitBlockContent1(ctx: BlockContent1Context): any;
    visitBlock2(ctx: Block2Context): any;
    visitBlockContent2(ctx: BlockContent2Context): any;
    visitBlock3(ctx: Block3Context): any;
    visitBlockContent3(ctx: BlockContent3Context): any;
    visitBlock4(ctx: Block4Context): any;
    visitBlockContent4(ctx: BlockContent4Context): any;
    visitBlock5(ctx: Block5Context): any;
    visitBlockContent5(ctx: BlockContent5Context): any;
    processAttrs(ctx: {
        ID(): TerminalNode;
        Class(): TerminalNode[];
    }): any;
    visitInline(ctx: InlineContext): any;
    visitInlineContentSeq(ctx: InlineContentSeqContext): any[];
    visitInlineContent(ctx: InlineContentContext): any;
    visitSyntaxSugar(ctx: SyntaxSugarContext): any;
    loc(ctx: {
        start: Token;
        stop: Token;
    }): {
        start: number;
        stop: number;
    };
    visitChildren(): void;
    visitErrorNode(): void;
    visitTerminal(): void;
    visitKoji(ctx: KojiContext): any;
}
