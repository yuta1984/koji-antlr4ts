import { Token } from "antlr4ts/Token";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { BlockContent1Context, BlockContent2Context, BlockContent3Context, BlockContent4Context, BlockContent5Context, InlineContentContext, SyntaxSugarContext, InlineContext, Block1Context, Block2Context, Block3Context, Block4Context, Block5Context, InlineContentSeqContext } from "./KojiParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { KojiParserVisitor } from "./KojiParserVisitor";
import { KojiContext, BlockContext, ListContext } from "./KojiParser";
export interface KojiASTNode {
    type: "koji" | "block" | "inline";
    name: string;
    location: {
        start: number;
        stop: number;
    };
    children: Array<KojiASTNode | string>;
    id?: string;
    classes?: Array<string>;
    extra?: Array<Array<KojiASTNode | string>>;
}
export declare class KojiAstBuilder extends AbstractParseTreeVisitor<any> implements KojiParserVisitor<any> {
    ast: KojiASTNode;
    defaultResult(): void;
    visit(ctx: KojiContext): KojiASTNode;
    visitList(ctx: ListContext): KojiASTNode | string;
    visitBlock(ctx: BlockContext): KojiASTNode;
    visitBlock1(ctx: Block1Context): KojiASTNode;
    visitBlockContent1(ctx: BlockContent1Context): KojiASTNode | string;
    visitBlock2(ctx: Block2Context): KojiASTNode;
    visitBlockContent2(ctx: BlockContent2Context): KojiASTNode | string;
    visitBlock3(ctx: Block3Context): KojiASTNode;
    visitBlockContent3(ctx: BlockContent3Context): KojiASTNode | string;
    visitBlock4(ctx: Block4Context): KojiASTNode;
    visitBlockContent4(ctx: BlockContent4Context): KojiASTNode | string;
    visitBlock5(ctx: Block5Context): KojiASTNode;
    visitBlockContent5(ctx: BlockContent5Context): KojiASTNode | string;
    processAttrs(ctx: {
        ID(): TerminalNode;
        Class(): TerminalNode[];
    }): any;
    visitInline(ctx: InlineContext): KojiASTNode;
    visitInlineContentSeq(ctx: InlineContentSeqContext): (string | KojiASTNode)[];
    visitInlineContent(ctx: InlineContentContext): KojiASTNode | string;
    visitSyntaxSugar(ctx: SyntaxSugarContext): KojiASTNode;
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
