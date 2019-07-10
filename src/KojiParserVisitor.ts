// Generated from KojiParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { KojiContext } from "./KojiParser";
import { ListContext } from "./KojiParser";
import { InlineContext } from "./KojiParser";
import { InlineContentSeqContext } from "./KojiParser";
import { InlineContentContext } from "./KojiParser";
import { BlockContext } from "./KojiParser";
import { Block1Context } from "./KojiParser";
import { BlockContent1Context } from "./KojiParser";
import { Block2Context } from "./KojiParser";
import { BlockContent2Context } from "./KojiParser";
import { Block3Context } from "./KojiParser";
import { BlockContent3Context } from "./KojiParser";
import { Block4Context } from "./KojiParser";
import { BlockContent4Context } from "./KojiParser";
import { Block5Context } from "./KojiParser";
import { BlockContent5Context } from "./KojiParser";
import { TextSegmentContext } from "./KojiParser";
import { SyntaxSugarContext } from "./KojiParser";
import { FuriganaContext } from "./KojiParser";
import { KaeritenContext } from "./KojiParser";
import { OkuriganaContext } from "./KojiParser";
import { AnnotationContext } from "./KojiParser";
import { IllegibleContext } from "./KojiParser";
import { BugHoleContext } from "./KojiParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KojiParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KojiParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `KojiParser.koji`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKoji?: (ctx: KojiContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.inline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline?: (ctx: InlineContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.inlineContentSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineContentSeq?: (ctx: InlineContentSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.inlineContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineContent?: (ctx: InlineContentContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock1?: (ctx: Block1Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.blockContent1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent1?: (ctx: BlockContent1Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock2?: (ctx: Block2Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.blockContent2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent2?: (ctx: BlockContent2Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock3?: (ctx: Block3Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.blockContent3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent3?: (ctx: BlockContent3Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock4?: (ctx: Block4Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.blockContent4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent4?: (ctx: BlockContent4Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.block5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock5?: (ctx: Block5Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.blockContent5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockContent5?: (ctx: BlockContent5Context) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.textSegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextSegment?: (ctx: TextSegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.syntaxSugar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxSugar?: (ctx: SyntaxSugarContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.furigana`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFurigana?: (ctx: FuriganaContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.kaeriten`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKaeriten?: (ctx: KaeritenContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.okurigana`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOkurigana?: (ctx: OkuriganaContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.illegible`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIllegible?: (ctx: IllegibleContext) => Result;

	/**
	 * Visit a parse tree produced by `KojiParser.bugHole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBugHole?: (ctx: BugHoleContext) => Result;
}

