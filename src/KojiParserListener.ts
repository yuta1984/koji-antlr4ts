// Generated from src/KojiParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { PostPositionedAttrsContext } from "./KojiParser";
import { SyntaxSugarContext } from "./KojiParser";
import { FuriganaContext } from "./KojiParser";
import { KaeritenContext } from "./KojiParser";
import { OkuriganaContext } from "./KojiParser";
import { TatetenContext } from "./KojiParser";
import { AnnotationContext } from "./KojiParser";
import { IllegibleContext } from "./KojiParser";
import { BugHoleContext } from "./KojiParser";
import { PersonContext } from "./KojiParser";
import { PlaceContext } from "./KojiParser";
import { DateContext } from "./KojiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KojiParser`.
 */
export interface KojiParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KojiParser.koji`.
	 * @param ctx the parse tree
	 */
	enterKoji?: (ctx: KojiContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.koji`.
	 * @param ctx the parse tree
	 */
	exitKoji?: (ctx: KojiContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.inline`.
	 * @param ctx the parse tree
	 */
	enterInline?: (ctx: InlineContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.inline`.
	 * @param ctx the parse tree
	 */
	exitInline?: (ctx: InlineContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.inlineContentSeq`.
	 * @param ctx the parse tree
	 */
	enterInlineContentSeq?: (ctx: InlineContentSeqContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.inlineContentSeq`.
	 * @param ctx the parse tree
	 */
	exitInlineContentSeq?: (ctx: InlineContentSeqContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.inlineContent`.
	 * @param ctx the parse tree
	 */
	enterInlineContent?: (ctx: InlineContentContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.inlineContent`.
	 * @param ctx the parse tree
	 */
	exitInlineContent?: (ctx: InlineContentContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block1`.
	 * @param ctx the parse tree
	 */
	enterBlock1?: (ctx: Block1Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block1`.
	 * @param ctx the parse tree
	 */
	exitBlock1?: (ctx: Block1Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.blockContent1`.
	 * @param ctx the parse tree
	 */
	enterBlockContent1?: (ctx: BlockContent1Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.blockContent1`.
	 * @param ctx the parse tree
	 */
	exitBlockContent1?: (ctx: BlockContent1Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block2`.
	 * @param ctx the parse tree
	 */
	enterBlock2?: (ctx: Block2Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block2`.
	 * @param ctx the parse tree
	 */
	exitBlock2?: (ctx: Block2Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.blockContent2`.
	 * @param ctx the parse tree
	 */
	enterBlockContent2?: (ctx: BlockContent2Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.blockContent2`.
	 * @param ctx the parse tree
	 */
	exitBlockContent2?: (ctx: BlockContent2Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block3`.
	 * @param ctx the parse tree
	 */
	enterBlock3?: (ctx: Block3Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block3`.
	 * @param ctx the parse tree
	 */
	exitBlock3?: (ctx: Block3Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.blockContent3`.
	 * @param ctx the parse tree
	 */
	enterBlockContent3?: (ctx: BlockContent3Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.blockContent3`.
	 * @param ctx the parse tree
	 */
	exitBlockContent3?: (ctx: BlockContent3Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block4`.
	 * @param ctx the parse tree
	 */
	enterBlock4?: (ctx: Block4Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block4`.
	 * @param ctx the parse tree
	 */
	exitBlock4?: (ctx: Block4Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.blockContent4`.
	 * @param ctx the parse tree
	 */
	enterBlockContent4?: (ctx: BlockContent4Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.blockContent4`.
	 * @param ctx the parse tree
	 */
	exitBlockContent4?: (ctx: BlockContent4Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.block5`.
	 * @param ctx the parse tree
	 */
	enterBlock5?: (ctx: Block5Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.block5`.
	 * @param ctx the parse tree
	 */
	exitBlock5?: (ctx: Block5Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.blockContent5`.
	 * @param ctx the parse tree
	 */
	enterBlockContent5?: (ctx: BlockContent5Context) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.blockContent5`.
	 * @param ctx the parse tree
	 */
	exitBlockContent5?: (ctx: BlockContent5Context) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.textSegment`.
	 * @param ctx the parse tree
	 */
	enterTextSegment?: (ctx: TextSegmentContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.textSegment`.
	 * @param ctx the parse tree
	 */
	exitTextSegment?: (ctx: TextSegmentContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.postPositionedAttrs`.
	 * @param ctx the parse tree
	 */
	enterPostPositionedAttrs?: (ctx: PostPositionedAttrsContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.postPositionedAttrs`.
	 * @param ctx the parse tree
	 */
	exitPostPositionedAttrs?: (ctx: PostPositionedAttrsContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.syntaxSugar`.
	 * @param ctx the parse tree
	 */
	enterSyntaxSugar?: (ctx: SyntaxSugarContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.syntaxSugar`.
	 * @param ctx the parse tree
	 */
	exitSyntaxSugar?: (ctx: SyntaxSugarContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.furigana`.
	 * @param ctx the parse tree
	 */
	enterFurigana?: (ctx: FuriganaContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.furigana`.
	 * @param ctx the parse tree
	 */
	exitFurigana?: (ctx: FuriganaContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.kaeriten`.
	 * @param ctx the parse tree
	 */
	enterKaeriten?: (ctx: KaeritenContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.kaeriten`.
	 * @param ctx the parse tree
	 */
	exitKaeriten?: (ctx: KaeritenContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.okurigana`.
	 * @param ctx the parse tree
	 */
	enterOkurigana?: (ctx: OkuriganaContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.okurigana`.
	 * @param ctx the parse tree
	 */
	exitOkurigana?: (ctx: OkuriganaContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.tateten`.
	 * @param ctx the parse tree
	 */
	enterTateten?: (ctx: TatetenContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.tateten`.
	 * @param ctx the parse tree
	 */
	exitTateten?: (ctx: TatetenContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.illegible`.
	 * @param ctx the parse tree
	 */
	enterIllegible?: (ctx: IllegibleContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.illegible`.
	 * @param ctx the parse tree
	 */
	exitIllegible?: (ctx: IllegibleContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.bugHole`.
	 * @param ctx the parse tree
	 */
	enterBugHole?: (ctx: BugHoleContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.bugHole`.
	 * @param ctx the parse tree
	 */
	exitBugHole?: (ctx: BugHoleContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.person`.
	 * @param ctx the parse tree
	 */
	enterPerson?: (ctx: PersonContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.person`.
	 * @param ctx the parse tree
	 */
	exitPerson?: (ctx: PersonContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.place`.
	 * @param ctx the parse tree
	 */
	enterPlace?: (ctx: PlaceContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.place`.
	 * @param ctx the parse tree
	 */
	exitPlace?: (ctx: PlaceContext) => void;

	/**
	 * Enter a parse tree produced by `KojiParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `KojiParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;
}

