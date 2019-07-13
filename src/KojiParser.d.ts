import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { KojiParserListener } from "./KojiParserListener";
import { KojiParserVisitor } from "./KojiParserVisitor";
export declare class KojiParser extends Parser {
    static readonly OpenBlock1 = 1;
    static readonly CloseBlock1 = 2;
    static readonly OpenBlock2 = 3;
    static readonly CloseBlock2 = 4;
    static readonly OpenBlock3 = 5;
    static readonly CloseBlock3 = 6;
    static readonly OpenBlock4 = 7;
    static readonly CloseBlock4 = 8;
    static readonly OpenBlock5 = 9;
    static readonly CloseBlock5 = 10;
    static readonly OpenInline = 11;
    static readonly CloseInline = 12;
    static readonly OpenInline2 = 13;
    static readonly CloseInline2 = 14;
    static readonly Bar = 15;
    static readonly FuriganaParen = 16;
    static readonly AnnotationParen = 17;
    static readonly Kaeriten = 18;
    static readonly Okurigana = 19;
    static readonly Illegible = 20;
    static readonly BugHole = 21;
    static readonly NonJp = 22;
    static readonly Kanji = 23;
    static readonly Kana = 24;
    static readonly NonJpChar = 25;
    static readonly KanjiChar = 26;
    static readonly Lb = 27;
    static readonly WS = 28;
    static readonly ElemName = 29;
    static readonly Colon = 30;
    static readonly HeaderLb = 31;
    static readonly ID = 32;
    static readonly Class = 33;
    static readonly RULE_koji = 0;
    static readonly RULE_list = 1;
    static readonly RULE_inline = 2;
    static readonly RULE_inlineContentSeq = 3;
    static readonly RULE_inlineContent = 4;
    static readonly RULE_block = 5;
    static readonly RULE_block1 = 6;
    static readonly RULE_blockContent1 = 7;
    static readonly RULE_block2 = 8;
    static readonly RULE_blockContent2 = 9;
    static readonly RULE_block3 = 10;
    static readonly RULE_blockContent3 = 11;
    static readonly RULE_block4 = 12;
    static readonly RULE_blockContent4 = 13;
    static readonly RULE_block5 = 14;
    static readonly RULE_blockContent5 = 15;
    static readonly RULE_textSegment = 16;
    static readonly RULE_syntaxSugar = 17;
    static readonly RULE_furigana = 18;
    static readonly RULE_kaeriten = 19;
    static readonly RULE_okurigana = 20;
    static readonly RULE_annotation = 21;
    static readonly RULE_illegible = 22;
    static readonly RULE_bugHole = 23;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    koji(): KojiContext;
    list(): ListContext;
    inline(): InlineContext;
    inlineContentSeq(): InlineContentSeqContext;
    inlineContent(): InlineContentContext;
    block(): BlockContext;
    block1(): Block1Context;
    blockContent1(): BlockContent1Context;
    block2(): Block2Context;
    blockContent2(): BlockContent2Context;
    block3(): Block3Context;
    blockContent3(): BlockContent3Context;
    block4(): Block4Context;
    blockContent4(): BlockContent4Context;
    block5(): Block5Context;
    blockContent5(): BlockContent5Context;
    textSegment(): TextSegmentContext;
    syntaxSugar(): SyntaxSugarContext;
    furigana(): FuriganaContext;
    kaeriten(): KaeritenContext;
    okurigana(): OkuriganaContext;
    annotation(): AnnotationContext;
    illegible(): IllegibleContext;
    bugHole(): BugHoleContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class KojiContext extends ParserRuleContext {
    EOF(): TerminalNode;
    list(): ListContext[];
    list(i: number): ListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class ListContext extends ParserRuleContext {
    block(): BlockContext | undefined;
    inline(): InlineContext | undefined;
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    Lb(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class InlineContext extends ParserRuleContext {
    _inlineContent: InlineContentContext;
    _content: InlineContentContext[];
    _inlineContentSeq: InlineContentSeqContext;
    _extra: InlineContentSeqContext[];
    OpenInline(): TerminalNode | undefined;
    ElemName(): TerminalNode;
    Colon(): TerminalNode;
    CloseInline(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    Bar(): TerminalNode[];
    Bar(i: number): TerminalNode;
    inlineContent(): InlineContentContext[];
    inlineContent(i: number): InlineContentContext;
    inlineContentSeq(): InlineContentSeqContext[];
    inlineContentSeq(i: number): InlineContentSeqContext;
    OpenInline2(): TerminalNode | undefined;
    CloseInline2(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class InlineContentSeqContext extends ParserRuleContext {
    inlineContent(): InlineContentContext[];
    inlineContent(i: number): InlineContentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class InlineContentContext extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    block1(): Block1Context | undefined;
    block2(): Block2Context | undefined;
    block3(): Block3Context | undefined;
    block4(): Block4Context | undefined;
    block5(): Block5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class Block1Context extends ParserRuleContext {
    _blockContent1: BlockContent1Context;
    _content: BlockContent1Context[];
    OpenBlock1(): TerminalNode;
    ElemName(): TerminalNode;
    HeaderLb(): TerminalNode;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    CloseBlock1(): TerminalNode | undefined;
    blockContent1(): BlockContent1Context[];
    blockContent1(i: number): BlockContent1Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContent1Context extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    block2(): Block2Context | undefined;
    block3(): Block3Context | undefined;
    block4(): Block4Context | undefined;
    block5(): Block5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class Block2Context extends ParserRuleContext {
    _blockContent2: BlockContent2Context;
    _content: BlockContent2Context[];
    OpenBlock2(): TerminalNode;
    ElemName(): TerminalNode;
    HeaderLb(): TerminalNode;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    CloseBlock2(): TerminalNode | undefined;
    blockContent2(): BlockContent2Context[];
    blockContent2(i: number): BlockContent2Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContent2Context extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    block3(): Block3Context | undefined;
    block4(): Block4Context | undefined;
    block5(): Block5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class Block3Context extends ParserRuleContext {
    _blockContent3: BlockContent3Context;
    _content: BlockContent3Context[];
    OpenBlock3(): TerminalNode;
    ElemName(): TerminalNode;
    HeaderLb(): TerminalNode;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    CloseBlock3(): TerminalNode | undefined;
    blockContent3(): BlockContent3Context[];
    blockContent3(i: number): BlockContent3Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContent3Context extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    block4(): Block4Context | undefined;
    block5(): Block5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class Block4Context extends ParserRuleContext {
    _blockContent4: BlockContent4Context;
    _content: BlockContent4Context[];
    OpenBlock4(): TerminalNode;
    ElemName(): TerminalNode;
    HeaderLb(): TerminalNode;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    CloseBlock4(): TerminalNode | undefined;
    blockContent4(): BlockContent4Context[];
    blockContent4(i: number): BlockContent4Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContent4Context extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    block5(): Block5Context | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class Block5Context extends ParserRuleContext {
    _blockContent5: BlockContent5Context;
    _content: BlockContent5Context[];
    OpenBlock5(): TerminalNode;
    ElemName(): TerminalNode;
    HeaderLb(): TerminalNode;
    ID(): TerminalNode | undefined;
    Class(): TerminalNode[];
    Class(i: number): TerminalNode;
    CloseBlock5(): TerminalNode | undefined;
    blockContent5(): BlockContent5Context[];
    blockContent5(i: number): BlockContent5Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BlockContent5Context extends ParserRuleContext {
    syntaxSugar(): SyntaxSugarContext | undefined;
    textSegment(): TextSegmentContext | undefined;
    inline(): InlineContext | undefined;
    Lb(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class TextSegmentContext extends ParserRuleContext {
    Kanji(): TerminalNode[];
    Kanji(i: number): TerminalNode;
    Kana(): TerminalNode[];
    Kana(i: number): TerminalNode;
    NonJp(): TerminalNode[];
    NonJp(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class SyntaxSugarContext extends ParserRuleContext {
    furigana(): FuriganaContext | undefined;
    kaeriten(): KaeritenContext | undefined;
    okurigana(): OkuriganaContext | undefined;
    annotation(): AnnotationContext | undefined;
    illegible(): IllegibleContext | undefined;
    bugHole(): BugHoleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class FuriganaContext extends ParserRuleContext {
    _target: Token;
    FuriganaParen(): TerminalNode;
    Kanji(): TerminalNode[];
    Kanji(i: number): TerminalNode;
    Kana(): TerminalNode[];
    Kana(i: number): TerminalNode;
    NonJp(): TerminalNode[];
    NonJp(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class KaeritenContext extends ParserRuleContext {
    Kaeriten(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class OkuriganaContext extends ParserRuleContext {
    Okurigana(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class AnnotationContext extends ParserRuleContext {
    AnnotationParen(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class IllegibleContext extends ParserRuleContext {
    Illegible(): TerminalNode[];
    Illegible(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
export declare class BugHoleContext extends ParserRuleContext {
    BugHole(): TerminalNode[];
    BugHole(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: KojiParserListener): void;
    exitRule(listener: KojiParserListener): void;
    accept<Result>(visitor: KojiParserVisitor<Result>): Result;
}
