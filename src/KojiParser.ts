// Generated from src/KojiParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { KojiParserListener } from "./KojiParserListener";
import { KojiParserVisitor } from "./KojiParserVisitor";


export class KojiParser extends Parser {
	public static readonly OpenBlock1 = 1;
	public static readonly CloseBlock1 = 2;
	public static readonly OpenBlock2 = 3;
	public static readonly CloseBlock2 = 4;
	public static readonly OpenBlock3 = 5;
	public static readonly CloseBlock3 = 6;
	public static readonly OpenBlock4 = 7;
	public static readonly CloseBlock4 = 8;
	public static readonly OpenBlock5 = 9;
	public static readonly CloseBlock5 = 10;
	public static readonly OpenInline = 11;
	public static readonly CloseInline = 12;
	public static readonly Bar = 13;
	public static readonly FuriganaPre = 14;
	public static readonly FuriganaOpen = 15;
	public static readonly AnnotationOpen = 16;
	public static readonly PersonOpen = 17;
	public static readonly PersonClose = 18;
	public static readonly PlaceOpen = 19;
	public static readonly PlaceClose = 20;
	public static readonly DateOpen = 21;
	public static readonly DateClose = 22;
	public static readonly AttrsOpen = 23;
	public static readonly KaeritenMark = 24;
	public static readonly TatetenChar = 25;
	public static readonly OkuriganaMark = 26;
	public static readonly IllegibleMark = 27;
	public static readonly BugHoleMark = 28;
	public static readonly NonJp = 29;
	public static readonly Kanji = 30;
	public static readonly Kana = 31;
	public static readonly NonJpChar = 32;
	public static readonly KanjiChar = 33;
	public static readonly Lb = 34;
	public static readonly WS = 35;
	public static readonly ElemName = 36;
	public static readonly Colon = 37;
	public static readonly HeaderLb = 38;
	public static readonly AttrsClose = 39;
	public static readonly ID = 40;
	public static readonly Class = 41;
	public static readonly FuriganaContent = 42;
	public static readonly FuriganaSep = 43;
	public static readonly FuriganaClose = 44;
	public static readonly KaeritenChar = 45;
	public static readonly AnnotationContent = 46;
	public static readonly AnnotationClose = 47;
	public static readonly RULE_koji = 0;
	public static readonly RULE_list = 1;
	public static readonly RULE_inline = 2;
	public static readonly RULE_inlineContentSeq = 3;
	public static readonly RULE_inlineContent = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_block1 = 6;
	public static readonly RULE_blockContent1 = 7;
	public static readonly RULE_block2 = 8;
	public static readonly RULE_blockContent2 = 9;
	public static readonly RULE_block3 = 10;
	public static readonly RULE_blockContent3 = 11;
	public static readonly RULE_block4 = 12;
	public static readonly RULE_blockContent4 = 13;
	public static readonly RULE_block5 = 14;
	public static readonly RULE_blockContent5 = 15;
	public static readonly RULE_textSegment = 16;
	public static readonly RULE_postPositionedAttrs = 17;
	public static readonly RULE_syntaxSugar = 18;
	public static readonly RULE_furiganaTarget = 19;
	public static readonly RULE_furigana = 20;
	public static readonly RULE_kaeriten = 21;
	public static readonly RULE_okurigana = 22;
	public static readonly RULE_tateten = 23;
	public static readonly RULE_annotation = 24;
	public static readonly RULE_illegible = 25;
	public static readonly RULE_bugHole = 26;
	public static readonly RULE_person = 27;
	public static readonly RULE_place = 28;
	public static readonly RULE_date = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"koji", "list", "inline", "inlineContentSeq", "inlineContent", "block", 
		"block1", "blockContent1", "block2", "blockContent2", "block3", "blockContent3", 
		"block4", "blockContent4", "block5", "blockContent5", "textSegment", "postPositionedAttrs", 
		"syntaxSugar", "furiganaTarget", "furigana", "kaeriten", "okurigana", 
		"tateten", "annotation", "illegible", "bugHole", "person", "place", "date",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\uFF05'", "'\n\n'", "'\uFF05\uFF05'", "'\n\uFF05\n'", "'\uFF05\uFF05\uFF05'", 
		"'\n\uFF05\uFF05\n'", "'\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\n'", 
		"'\uFF05\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\uFF05\n'", 
		"'\u300A'", "'\u300B'", undefined, undefined, "'\uFF08'", "'\u3010'", 
		"'\uFF5B'", "'\uFF5D'", "'\u3014'", "'\u3015'", "'\uFF1C'", "'\uFF1E'", 
		"'\uFF3B'", "'\uFF3F'", undefined, "'\uFFE3'", "'\u25A0'", "'\u25A1'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'\uFF1A'", undefined, "'\uFF3D'", undefined, undefined, undefined, 
		undefined, "'\uFF09'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "Bar", "FuriganaPre", "FuriganaOpen", "AnnotationOpen", 
		"PersonOpen", "PersonClose", "PlaceOpen", "PlaceClose", "DateOpen", "DateClose", 
		"AttrsOpen", "KaeritenMark", "TatetenChar", "OkuriganaMark", "IllegibleMark", 
		"BugHoleMark", "NonJp", "Kanji", "Kana", "NonJpChar", "KanjiChar", "Lb", 
		"WS", "ElemName", "Colon", "HeaderLb", "AttrsClose", "ID", "Class", "FuriganaContent", 
		"FuriganaSep", "FuriganaClose", "KaeritenChar", "AnnotationContent", "AnnotationClose",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KojiParser._LITERAL_NAMES, KojiParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KojiParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "KojiParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return KojiParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return KojiParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KojiParser._ATN, this);
	}
	// @RuleVersion(0)
	public koji(): KojiContext {
		let _localctx: KojiContext = new KojiContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KojiParser.RULE_koji);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenBlock1) | (1 << KojiParser.OpenBlock2) | (1 << KojiParser.OpenBlock3) | (1 << KojiParser.OpenBlock4) | (1 << KojiParser.OpenBlock5) | (1 << KojiParser.OpenInline) | (1 << KojiParser.FuriganaPre) | (1 << KojiParser.AnnotationOpen) | (1 << KojiParser.PersonOpen) | (1 << KojiParser.PlaceOpen) | (1 << KojiParser.DateOpen) | (1 << KojiParser.KaeritenMark) | (1 << KojiParser.TatetenChar) | (1 << KojiParser.OkuriganaMark) | (1 << KojiParser.IllegibleMark) | (1 << KojiParser.BugHoleMark) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana))) !== 0) || _la === KojiParser.Lb) {
				{
				{
				this.state = 60;
				this.list();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 66;
			this.match(KojiParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KojiParser.RULE_list);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.inline();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.syntaxSugar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.textSegment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.match(KojiParser.Lb);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inline(): InlineContext {
		let _localctx: InlineContext = new InlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KojiParser.RULE_inline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(KojiParser.OpenInline);
			this.state = 76;
			this.match(KojiParser.ElemName);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 77;
				this.match(KojiParser.ID);
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 80;
				this.match(KojiParser.Class);
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
			this.match(KojiParser.Colon);
			this.state = 87;
			_localctx._inlineContentSeq = this.inlineContentSeq();
			_localctx._content.push(_localctx._inlineContentSeq);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Bar) {
				{
				{
				this.state = 88;
				this.match(KojiParser.Bar);
				this.state = 89;
				_localctx._inlineContentSeq = this.inlineContentSeq();
				_localctx._content.push(_localctx._inlineContentSeq);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			this.match(KojiParser.CloseInline);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineContentSeq(): InlineContentSeqContext {
		let _localctx: InlineContentSeqContext = new InlineContentSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KojiParser.RULE_inlineContentSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.FuriganaPre - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.IllegibleMark - 11)) | (1 << (KojiParser.BugHoleMark - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0)) {
				{
				{
				this.state = 97;
				this.inlineContent();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineContent(): InlineContentContext {
		let _localctx: InlineContentContext = new InlineContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KojiParser.RULE_inlineContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 103;
				this.syntaxSugar();
				}
				break;

			case 2:
				{
				this.state = 104;
				this.textSegment();
				}
				break;

			case 3:
				{
				this.state = 105;
				this.inline();
				}
				break;

			case 4:
				{
				this.state = 106;
				this.match(KojiParser.Lb);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KojiParser.RULE_block);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.OpenBlock1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.block1();
				}
				break;
			case KojiParser.OpenBlock2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.block2();
				}
				break;
			case KojiParser.OpenBlock3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 111;
				this.block3();
				}
				break;
			case KojiParser.OpenBlock4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 112;
				this.block4();
				}
				break;
			case KojiParser.OpenBlock5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 113;
				this.block5();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block1(): Block1Context {
		let _localctx: Block1Context = new Block1Context(this._ctx, this.state);
		this.enterRule(_localctx, 12, KojiParser.RULE_block1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(KojiParser.OpenBlock1);
			this.state = 117;
			this.match(KojiParser.ElemName);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 118;
				this.match(KojiParser.ID);
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 121;
				this.match(KojiParser.Class);
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 127;
			this.match(KojiParser.HeaderLb);
			this.state = 131;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 128;
					_localctx._blockContent1 = this.blockContent1();
					_localctx._content.push(_localctx._blockContent1);
					}
					}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock1) {
				{
				this.state = 134;
				this.match(KojiParser.CloseBlock1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockContent1(): BlockContent1Context {
		let _localctx: BlockContent1Context = new BlockContent1Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, KojiParser.RULE_blockContent1);
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 139;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 140;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 141;
				this.block2();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 142;
				this.block3();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 143;
				this.block4();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 144;
				this.block5();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block2(): Block2Context {
		let _localctx: Block2Context = new Block2Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, KojiParser.RULE_block2);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(KojiParser.OpenBlock2);
			this.state = 148;
			this.match(KojiParser.ElemName);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 149;
				this.match(KojiParser.ID);
				}
			}

			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 152;
				this.match(KojiParser.Class);
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.match(KojiParser.HeaderLb);
			this.state = 162;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					_localctx._blockContent2 = this.blockContent2();
					_localctx._content.push(_localctx._blockContent2);
					}
					}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock2) {
				{
				this.state = 165;
				this.match(KojiParser.CloseBlock2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockContent2(): BlockContent2Context {
		let _localctx: BlockContent2Context = new BlockContent2Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, KojiParser.RULE_blockContent2);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 171;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.block3();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 173;
				this.block4();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 174;
				this.block5();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block3(): Block3Context {
		let _localctx: Block3Context = new Block3Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, KojiParser.RULE_block3);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(KojiParser.OpenBlock3);
			this.state = 178;
			this.match(KojiParser.ElemName);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 179;
				this.match(KojiParser.ID);
				}
			}

			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 182;
				this.match(KojiParser.Class);
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this.match(KojiParser.HeaderLb);
			this.state = 192;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 189;
					_localctx._blockContent3 = this.blockContent3();
					_localctx._content.push(_localctx._blockContent3);
					}
					}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock3) {
				{
				this.state = 195;
				this.match(KojiParser.CloseBlock3);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockContent3(): BlockContent3Context {
		let _localctx: BlockContent3Context = new BlockContent3Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, KojiParser.RULE_blockContent3);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 199;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 201;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 202;
				this.block4();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 203;
				this.block5();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block4(): Block4Context {
		let _localctx: Block4Context = new Block4Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, KojiParser.RULE_block4);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(KojiParser.OpenBlock4);
			this.state = 207;
			this.match(KojiParser.ElemName);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 208;
				this.match(KojiParser.ID);
				}
			}

			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 211;
				this.match(KojiParser.Class);
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this.match(KojiParser.HeaderLb);
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 218;
					_localctx._blockContent4 = this.blockContent4();
					_localctx._content.push(_localctx._blockContent4);
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock4) {
				{
				this.state = 224;
				this.match(KojiParser.CloseBlock4);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockContent4(): BlockContent4Context {
		let _localctx: BlockContent4Context = new BlockContent4Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, KojiParser.RULE_blockContent4);
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 231;
				this.block5();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block5(): Block5Context {
		let _localctx: Block5Context = new Block5Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, KojiParser.RULE_block5);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(KojiParser.OpenBlock5);
			this.state = 235;
			this.match(KojiParser.ElemName);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 236;
				this.match(KojiParser.ID);
				}
			}

			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 239;
				this.match(KojiParser.Class);
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
			this.match(KojiParser.HeaderLb);
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 246;
					_localctx._blockContent5 = this.blockContent5();
					_localctx._content.push(_localctx._blockContent5);
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock5) {
				{
				this.state = 252;
				this.match(KojiParser.CloseBlock5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockContent5(): BlockContent5Context {
		let _localctx: BlockContent5Context = new BlockContent5Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, KojiParser.RULE_blockContent5);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 257;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 258;
				this.match(KojiParser.Lb);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textSegment(): TextSegmentContext {
		let _localctx: TextSegmentContext = new TextSegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, KojiParser.RULE_textSegment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 261;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postPositionedAttrs(): PostPositionedAttrsContext {
		let _localctx: PostPositionedAttrsContext = new PostPositionedAttrsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KojiParser.RULE_postPositionedAttrs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(KojiParser.AttrsOpen);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 267;
				this.match(KojiParser.ID);
				}
			}

			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 270;
				this.match(KojiParser.Class);
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
			this.match(KojiParser.AttrsClose);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntaxSugar(): SyntaxSugarContext {
		let _localctx: SyntaxSugarContext = new SyntaxSugarContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, KojiParser.RULE_syntaxSugar);
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.furigana();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.kaeriten();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				this.okurigana();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 281;
				this.tateten();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 282;
				this.annotation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 283;
				this.illegible();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 284;
				this.bugHole();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 285;
				this.person();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 286;
				this.place();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 287;
				this.date();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public furiganaTarget(): FuriganaTargetContext {
		let _localctx: FuriganaTargetContext = new FuriganaTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KojiParser.RULE_furiganaTarget);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.Kanji:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.match(KojiParser.Kanji);
				}
				break;
			case KojiParser.Kana:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.match(KojiParser.Kana);
				}
				break;
			case KojiParser.NonJp:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this.match(KojiParser.NonJp);
				}
				break;
			case KojiParser.AnnotationOpen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.annotation();
				}
				break;
			case KojiParser.IllegibleMark:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 294;
				this.illegible();
				}
				break;
			case KojiParser.BugHoleMark:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 295;
				this.bugHole();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public furigana(): FuriganaContext {
		let _localctx: FuriganaContext = new FuriganaContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KojiParser.RULE_furigana);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.FuriganaPre) {
				{
				this.state = 298;
				this.match(KojiParser.FuriganaPre);
				}
			}

			{
			this.state = 301;
			_localctx._target = this.furiganaTarget();
			}
			this.state = 302;
			this.match(KojiParser.FuriganaOpen);
			this.state = 303;
			_localctx._right = this.match(KojiParser.FuriganaContent);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.FuriganaSep) {
				{
				this.state = 304;
				this.match(KojiParser.FuriganaSep);
				this.state = 305;
				_localctx._left = this.match(KojiParser.FuriganaContent);
				}
			}

			this.state = 308;
			this.match(KojiParser.FuriganaClose);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kaeriten(): KaeritenContext {
		let _localctx: KaeritenContext = new KaeritenContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KojiParser.RULE_kaeriten);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(KojiParser.KaeritenMark);
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 311;
				_localctx._content = this.match(KojiParser.KaeritenChar);
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KojiParser.KaeritenChar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public okurigana(): OkuriganaContext {
		let _localctx: OkuriganaContext = new OkuriganaContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KojiParser.RULE_okurigana);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(KojiParser.OkuriganaMark);
			this.state = 317;
			_localctx._content = this.match(KojiParser.Kana);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tateten(): TatetenContext {
		let _localctx: TatetenContext = new TatetenContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KojiParser.RULE_tateten);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(KojiParser.TatetenChar);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KojiParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(KojiParser.AnnotationOpen);
			this.state = 322;
			_localctx._content = this.match(KojiParser.AnnotationContent);
			this.state = 323;
			_la = this._input.LA(1);
			if (!(_la === KojiParser.EOF || _la === KojiParser.AnnotationClose)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public illegible(): IllegibleContext {
		let _localctx: IllegibleContext = new IllegibleContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, KojiParser.RULE_illegible);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 325;
					this.match(KojiParser.IllegibleMark);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bugHole(): BugHoleContext {
		let _localctx: BugHoleContext = new BugHoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KojiParser.RULE_bugHole);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 330;
					this.match(KojiParser.BugHoleMark);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public person(): PersonContext {
		let _localctx: PersonContext = new PersonContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, KojiParser.RULE_person);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(KojiParser.PersonOpen);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 336;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.FuriganaPre - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.IllegibleMark - 11)) | (1 << (KojiParser.BugHoleMark - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 341;
			this.match(KojiParser.PersonClose);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.AttrsOpen) {
				{
				this.state = 342;
				this.postPositionedAttrs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public place(): PlaceContext {
		let _localctx: PlaceContext = new PlaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, KojiParser.RULE_place);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(KojiParser.PlaceOpen);
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 346;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.FuriganaPre - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.IllegibleMark - 11)) | (1 << (KojiParser.BugHoleMark - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 351;
			this.match(KojiParser.PlaceClose);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.AttrsOpen) {
				{
				this.state = 352;
				this.postPositionedAttrs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, KojiParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(KojiParser.DateOpen);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 356;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.FuriganaPre - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.IllegibleMark - 11)) | (1 << (KojiParser.BugHoleMark - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 361;
			this.match(KojiParser.DateClose);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.AttrsOpen) {
				{
				this.state = 362;
				this.postPositionedAttrs();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0170\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x07\x02@\n\x02\f\x02\x0E" +
		"\x02C\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03L\n\x03\x03\x04\x03\x04\x03\x04\x05\x04Q\n\x04\x03\x04\x07\x04T\n" +
		"\x04\f\x04\x0E\x04W\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04]\n\x04" +
		"\f\x04\x0E\x04`\v\x04\x03\x04\x03\x04\x03\x05\x07\x05e\n\x05\f\x05\x0E" +
		"\x05h\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06n\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07u\n\x07\x03\b\x03\b\x03\b\x05\bz\n" +
		"\b\x03\b\x07\b}\n\b\f\b\x0E\b\x80\v\b\x03\b\x03\b\x07\b\x84\n\b\f\b\x0E" +
		"\b\x87\v\b\x03\b\x05\b\x8A\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\x94\n\t\x03\n\x03\n\x03\n\x05\n\x99\n\n\x03\n\x07\n\x9C" +
		"\n\n\f\n\x0E\n\x9F\v\n\x03\n\x03\n\x07\n\xA3\n\n\f\n\x0E\n\xA6\v\n\x03" +
		"\n\x05\n\xA9\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB2\n" +
		"\v\x03\f\x03\f\x03\f\x05\f\xB7\n\f\x03\f\x07\f\xBA\n\f\f\f\x0E\f\xBD\v" +
		"\f\x03\f\x03\f\x07\f\xC1\n\f\f\f\x0E\f\xC4\v\f\x03\f\x05\f\xC7\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\xD4\n\x0E\x03\x0E\x07\x0E\xD7\n\x0E\f\x0E\x0E\x0E\xDA\v\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xDE\n\x0E\f\x0E\x0E\x0E\xE1\v\x0E\x03\x0E\x05\x0E" +
		"\xE4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xEB\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03\x10\x07\x10\xF3\n\x10\f\x10" +
		"\x0E\x10\xF6\v\x10\x03\x10\x03\x10\x07\x10\xFA\n\x10\f\x10\x0E\x10\xFD" +
		"\v\x10\x03\x10\x05\x10\u0100\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u0106\n\x11\x03\x12\x06\x12\u0109\n\x12\r\x12\x0E\x12\u010A\x03\x13" +
		"\x03\x13\x05\x13\u010F\n\x13\x03\x13\x07\x13\u0112\n\x13\f\x13\x0E\x13" +
		"\u0115\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0123\n\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u012B\n\x15\x03\x16\x05\x16\u012E" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0135\n\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x06\x17\u013B\n\x17\r\x17\x0E\x17\u013C\x03" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x06\x1B\u0149\n\x1B\r\x1B\x0E\x1B\u014A\x03\x1C\x06\x1C\u014E\n\x1C" +
		"\r\x1C\x0E\x1C\u014F\x03\x1D\x03\x1D\x06\x1D\u0154\n\x1D\r\x1D\x0E\x1D" +
		"\u0155\x03\x1D\x03\x1D\x05\x1D\u015A\n\x1D\x03\x1E\x03\x1E\x06\x1E\u015E" +
		"\n\x1E\r\x1E\x0E\x1E\u015F\x03\x1E\x03\x1E\x05\x1E\u0164\n\x1E\x03\x1F" +
		"\x03\x1F\x06\x1F\u0168\n\x1F\r\x1F\x0E\x1F\u0169\x03\x1F\x03\x1F\x05\x1F" +
		"\u016E\n\x1F\x03\x1F\x02\x02\x02 \x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02\x02\x04\x03\x02\x1F!\x03\x0311\x02\u01AA\x02A\x03\x02" +
		"\x02\x02\x04K\x03\x02\x02\x02\x06M\x03\x02\x02\x02\bf\x03\x02\x02\x02" +
		"\nm\x03\x02\x02\x02\ft\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02\x10\x93\x03" +
		"\x02\x02\x02\x12\x95\x03\x02\x02\x02\x14\xB1\x03\x02\x02\x02\x16\xB3\x03" +
		"\x02\x02\x02\x18\xCE\x03\x02\x02\x02\x1A\xD0\x03\x02\x02\x02\x1C\xEA\x03" +
		"\x02\x02\x02\x1E\xEC\x03\x02\x02\x02 \u0105\x03\x02\x02\x02\"\u0108\x03" +
		"\x02\x02\x02$\u010C\x03\x02\x02\x02&\u0122\x03\x02\x02\x02(\u012A\x03" +
		"\x02\x02\x02*\u012D\x03\x02\x02\x02,\u0138\x03\x02\x02\x02.\u013E\x03" +
		"\x02\x02\x020\u0141\x03\x02\x02\x022\u0143\x03\x02\x02\x024\u0148\x03" +
		"\x02\x02\x026\u014D\x03\x02\x02\x028\u0151\x03\x02\x02\x02:\u015B\x03" +
		"\x02\x02\x02<\u0165\x03\x02\x02\x02>@\x05\x04\x03\x02?>\x03\x02\x02\x02" +
		"@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BD\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02DE\x07\x02\x02\x03E\x03\x03\x02\x02\x02FL\x05\f\x07" +
		"\x02GL\x05\x06\x04\x02HL\x05&\x14\x02IL\x05\"\x12\x02JL\x07$\x02\x02K" +
		"F\x03\x02\x02\x02KG\x03\x02\x02\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02" +
		"KJ\x03\x02\x02\x02L\x05\x03\x02\x02\x02MN\x07\r\x02\x02NP\x07&\x02\x02" +
		"OQ\x07*\x02\x02PO\x03\x02\x02\x02PQ\x03\x02\x02\x02QU\x03\x02\x02\x02" +
		"RT\x07+\x02\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02" +
		"UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07\'\x02\x02" +
		"Y^\x05\b\x05\x02Z[\x07\x0F\x02\x02[]\x05\b\x05\x02\\Z\x03\x02\x02\x02" +
		"]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02" +
		"\x02`^\x03\x02\x02\x02ab\x07\x0E\x02\x02b\x07\x03\x02\x02\x02ce\x05\n" +
		"\x06\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02g\t\x03\x02\x02\x02hf\x03\x02\x02\x02in\x05&\x14\x02jn\x05\"\x12" +
		"\x02kn\x05\x06\x04\x02ln\x07$\x02\x02mi\x03\x02\x02\x02mj\x03\x02\x02" +
		"\x02mk\x03\x02\x02\x02ml\x03\x02\x02\x02n\v\x03\x02\x02\x02ou\x05\x0E" +
		"\b\x02pu\x05\x12\n\x02qu\x05\x16\f\x02ru\x05\x1A\x0E\x02su\x05\x1E\x10" +
		"\x02to\x03\x02\x02\x02tp\x03\x02\x02\x02tq\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02ts\x03\x02\x02\x02u\r\x03\x02\x02\x02vw\x07\x03\x02\x02wy\x07&\x02" +
		"\x02xz\x07*\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z~\x03\x02\x02" +
		"\x02{}\x07+\x02\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x81\x85\x07(\x02\x02\x82\x84\x05\x10\t\x02\x83\x82\x03\x02\x02\x02\x84" +
		"\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86" +
		"\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8A\x07\x04\x02\x02\x89" +
		"\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x0F\x03\x02\x02\x02\x8B" +
		"\x94\x05&\x14\x02\x8C\x94\x05\"\x12\x02\x8D\x94\x05\x06\x04\x02\x8E\x94" +
		"\x07$\x02\x02\x8F\x94\x05\x12\n\x02\x90\x94\x05\x16\f\x02\x91\x94\x05" +
		"\x1A\x0E\x02\x92\x94\x05\x1E\x10\x02\x93\x8B\x03\x02\x02\x02\x93\x8C\x03" +
		"\x02\x02\x02\x93\x8D\x03\x02\x02\x02\x93\x8E\x03\x02\x02\x02\x93\x8F\x03" +
		"\x02\x02\x02\x93\x90\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03" +
		"\x02\x02\x02\x94\x11\x03\x02\x02\x02\x95\x96\x07\x05\x02\x02\x96\x98\x07" +
		"&\x02\x02\x97\x99\x07*\x02\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02" +
		"\x02\x02\x99\x9D\x03\x02\x02\x02\x9A\x9C\x07+\x02\x02\x9B\x9A\x03\x02" +
		"\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02" +
		"\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA4\x07(" +
		"\x02\x02\xA1\xA3\x05\x14\v\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02" +
		"\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xA9\x07\x06\x02\x02\xA8\xA7\x03\x02" +
		"\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\x13\x03\x02\x02\x02\xAA\xB2\x05&" +
		"\x14\x02\xAB\xB2\x05\"\x12\x02\xAC\xB2\x05\x06\x04\x02\xAD\xB2\x07$\x02" +
		"\x02\xAE\xB2\x05\x16\f\x02\xAF\xB2\x05\x1A\x0E\x02\xB0\xB2\x05\x1E\x10" +
		"\x02\xB1\xAA\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAC\x03\x02\x02" +
		"\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03\x02\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB2\x15\x03\x02\x02\x02\xB3\xB4\x07\x07\x02" +
		"\x02\xB4\xB6\x07&\x02\x02\xB5\xB7\x07*\x02\x02\xB6\xB5\x03\x02\x02\x02" +
		"\xB6\xB7\x03\x02\x02\x02\xB7\xBB\x03\x02\x02\x02\xB8\xBA\x07+\x02\x02" +
		"\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02" +
		"\xBE\xC2\x07(\x02\x02\xBF\xC1\x05\x18\r\x02\xC0\xBF\x03\x02\x02\x02\xC1" +
		"\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
		"\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC7\x07\b\x02\x02\xC6" +
		"\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x17\x03\x02\x02\x02\xC8" +
		"\xCF\x05&\x14\x02\xC9\xCF\x05\"\x12\x02\xCA\xCF\x05\x06\x04\x02\xCB\xCF" +
		"\x07$\x02\x02\xCC\xCF\x05\x1A\x0E\x02\xCD\xCF\x05\x1E\x10\x02\xCE\xC8" +
		"\x03\x02\x02\x02\xCE\xC9\x03\x02\x02\x02\xCE\xCA\x03\x02\x02\x02\xCE\xCB" +
		"\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\x19" +
		"\x03\x02\x02\x02\xD0\xD1\x07\t\x02\x02\xD1\xD3\x07&\x02\x02\xD2\xD4\x07" +
		"*\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD8\x03" +
		"\x02\x02\x02\xD5\xD7\x07+\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03" +
		"\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
		"\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDF\x07(\x02\x02\xDC\xDE\x05" +
		"\x1C\x0F\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03" +
		"\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03" +
		"\x02\x02\x02\xE2\xE4\x07\n\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4\x1B\x03\x02\x02\x02\xE5\xEB\x05&\x14\x02\xE6\xEB\x05" +
		"\"\x12\x02\xE7\xEB\x05\x06\x04\x02\xE8\xEB\x07$\x02\x02\xE9\xEB\x05\x1E" +
		"\x10\x02\xEA\xE5\x03\x02\x02\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE7\x03\x02" +
		"\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\x1D\x03\x02" +
		"\x02\x02\xEC\xED\x07\v\x02\x02\xED\xEF\x07&\x02\x02\xEE\xF0\x07*\x02\x02" +
		"\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF4\x03\x02\x02\x02" +
		"\xF1\xF3\x07+\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02" +
		"\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02" +
		"\xF6\xF4\x03\x02\x02\x02\xF7\xFB\x07(\x02\x02\xF8\xFA\x05 \x11\x02\xF9" +
		"\xF8\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE" +
		"\u0100\x07\f\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02" +
		"\u0100\x1F\x03\x02\x02\x02\u0101\u0106\x05&\x14\x02\u0102\u0106\x05\"" +
		"\x12\x02\u0103\u0106\x05\x06\x04\x02\u0104\u0106\x07$\x02\x02\u0105\u0101" +
		"\x03\x02\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02" +
		"\u0105\u0104\x03\x02\x02\x02\u0106!\x03\x02\x02\x02\u0107\u0109\t\x02" +
		"\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B#\x03\x02\x02" +
		"\x02\u010C\u010E\x07\x19\x02\x02\u010D\u010F\x07*\x02\x02\u010E\u010D" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0113\x03\x02\x02\x02" +
		"\u0110\u0112\x07+\x02\x02\u0111\u0110\x03\x02\x02\x02\u0112\u0115\x03" +
		"\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0116\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u0117\x07)\x02" +
		"\x02\u0117%\x03\x02\x02\x02\u0118\u0123\x05*\x16\x02\u0119\u0123\x05," +
		"\x17\x02\u011A\u0123\x05.\x18\x02\u011B\u0123\x050\x19\x02\u011C\u0123" +
		"\x052\x1A\x02\u011D\u0123\x054\x1B\x02\u011E\u0123\x056\x1C\x02\u011F" +
		"\u0123\x058\x1D\x02\u0120\u0123\x05:\x1E\x02\u0121\u0123\x05<\x1F\x02" +
		"\u0122\u0118\x03\x02\x02\x02\u0122\u0119\x03\x02\x02\x02\u0122\u011A\x03" +
		"\x02\x02\x02\u0122\u011B\x03\x02\x02\x02\u0122\u011C\x03\x02\x02\x02\u0122" +
		"\u011D\x03\x02\x02\x02\u0122\u011E\x03\x02\x02\x02\u0122\u011F\x03\x02" +
		"\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123" +
		"\'\x03\x02\x02\x02\u0124\u012B\x07 \x02\x02\u0125\u012B\x07!\x02\x02\u0126" +
		"\u012B\x07\x1F\x02\x02\u0127\u012B\x052\x1A\x02\u0128\u012B\x054\x1B\x02" +
		"\u0129\u012B\x056\x1C\x02\u012A\u0124\x03\x02\x02\x02\u012A\u0125\x03" +
		"\x02\x02\x02\u012A\u0126\x03\x02\x02\x02\u012A\u0127\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B)\x03\x02\x02" +
		"\x02\u012C\u012E\x07\x10\x02\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E" +
		"\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x05(\x15\x02" +
		"\u0130\u0131\x07\x11\x02\x02\u0131\u0134\x07,\x02\x02\u0132\u0133\x07" +
		"-\x02\x02\u0133\u0135\x07,\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135" +
		"\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07.\x02\x02" +
		"\u0137+\x03\x02\x02\x02\u0138\u013A\x07\x1A\x02\x02\u0139\u013B\x07/\x02" +
		"\x02\u013A\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013A" +
		"\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D-\x03\x02\x02\x02\u013E" +
		"\u013F\x07\x1C\x02\x02\u013F\u0140\x07!\x02\x02\u0140/\x03\x02\x02\x02" +
		"\u0141\u0142\x07\x1B\x02\x02\u01421\x03\x02\x02\x02\u0143\u0144\x07\x12" +
		"\x02\x02\u0144\u0145\x070\x02\x02\u0145\u0146\t\x03\x02\x02\u01463\x03" +
		"\x02\x02\x02\u0147\u0149\x07\x1D\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149" +
		"\u014A\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B5\x03\x02\x02\x02\u014C\u014E\x07\x1E\x02\x02\u014D\u014C" +
		"\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u01507\x03\x02\x02\x02\u0151\u0153\x07\x13" +
		"\x02\x02\u0152\u0154\x05\n\x06\x02\u0153\u0152\x03\x02\x02\x02\u0154\u0155" +
		"\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
		"\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x07\x14\x02\x02\u0158\u015A\x05" +
		"$\x13\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"9\x03\x02\x02\x02\u015B\u015D\x07\x15\x02\x02\u015C\u015E\x05\n\x06\x02" +
		"\u015D\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03" +
		"\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0163\x07\x16\x02\x02\u0162\u0164\x05$\x13\x02\u0163\u0162\x03\x02\x02" +
		"\x02\u0163\u0164\x03\x02\x02\x02\u0164;\x03\x02\x02\x02\u0165\u0167\x07" +
		"\x17\x02\x02\u0166\u0168\x05\n\x06\x02\u0167\u0166\x03\x02\x02\x02\u0168" +
		"\u0169\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02" +
		"\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016D\x07\x18\x02\x02\u016C" +
		"\u016E\x05$\x13\x02\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02" +
		"\x02\u016E=\x03\x02\x02\x023AKPU^fmty~\x85\x89\x93\x98\x9D\xA4\xA8\xB1" +
		"\xB6\xBB\xC2\xC6\xCE\xD3\xD8\xDF\xE3\xEA\xEF\xF4\xFB\xFF\u0105\u010A\u010E" +
		"\u0113\u0122\u012A\u012D\u0134\u013C\u014A\u014F\u0155\u0159\u015F\u0163" +
		"\u0169\u016D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KojiParser.__ATN) {
			KojiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KojiParser._serializedATN));
		}

		return KojiParser.__ATN;
	}

}

export class KojiContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(KojiParser.EOF, 0); }
	public list(): ListContext[];
	public list(i: number): ListContext;
	public list(i?: number): ListContext | ListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ListContext);
		} else {
			return this.getRuleContext(i, ListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_koji; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterKoji) {
			listener.enterKoji(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitKoji) {
			listener.exitKoji(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitKoji) {
			return visitor.visitKoji(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_list; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineContext extends ParserRuleContext {
	public _inlineContentSeq: InlineContentSeqContext;
	public _content: InlineContentSeqContext[] = [];
	public OpenInline(): TerminalNode { return this.getToken(KojiParser.OpenInline, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public Colon(): TerminalNode { return this.getToken(KojiParser.Colon, 0); }
	public CloseInline(): TerminalNode { return this.getToken(KojiParser.CloseInline, 0); }
	public inlineContentSeq(): InlineContentSeqContext[];
	public inlineContentSeq(i: number): InlineContentSeqContext;
	public inlineContentSeq(i?: number): InlineContentSeqContext | InlineContentSeqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentSeqContext);
		} else {
			return this.getRuleContext(i, InlineContentSeqContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public Bar(): TerminalNode[];
	public Bar(i: number): TerminalNode;
	public Bar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Bar);
		} else {
			return this.getToken(KojiParser.Bar, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_inline; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterInline) {
			listener.enterInline(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitInline) {
			listener.exitInline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitInline) {
			return visitor.visitInline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineContentSeqContext extends ParserRuleContext {
	public inlineContent(): InlineContentContext[];
	public inlineContent(i: number): InlineContentContext;
	public inlineContent(i?: number): InlineContentContext | InlineContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentContext);
		} else {
			return this.getRuleContext(i, InlineContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_inlineContentSeq; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterInlineContentSeq) {
			listener.enterInlineContentSeq(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitInlineContentSeq) {
			listener.exitInlineContentSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitInlineContentSeq) {
			return visitor.visitInlineContentSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineContentContext extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_inlineContent; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterInlineContent) {
			listener.enterInlineContent(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitInlineContent) {
			listener.exitInlineContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitInlineContent) {
			return visitor.visitInlineContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public block1(): Block1Context | undefined {
		return this.tryGetRuleContext(0, Block1Context);
	}
	public block2(): Block2Context | undefined {
		return this.tryGetRuleContext(0, Block2Context);
	}
	public block3(): Block3Context | undefined {
		return this.tryGetRuleContext(0, Block3Context);
	}
	public block4(): Block4Context | undefined {
		return this.tryGetRuleContext(0, Block4Context);
	}
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block1Context extends ParserRuleContext {
	public _blockContent1: BlockContent1Context;
	public _content: BlockContent1Context[] = [];
	public OpenBlock1(): TerminalNode { return this.getToken(KojiParser.OpenBlock1, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public HeaderLb(): TerminalNode { return this.getToken(KojiParser.HeaderLb, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public CloseBlock1(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseBlock1, 0); }
	public blockContent1(): BlockContent1Context[];
	public blockContent1(i: number): BlockContent1Context;
	public blockContent1(i?: number): BlockContent1Context | BlockContent1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContent1Context);
		} else {
			return this.getRuleContext(i, BlockContent1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block1; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock1) {
			listener.enterBlock1(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock1) {
			listener.exitBlock1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock1) {
			return visitor.visitBlock1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContent1Context extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	public block2(): Block2Context | undefined {
		return this.tryGetRuleContext(0, Block2Context);
	}
	public block3(): Block3Context | undefined {
		return this.tryGetRuleContext(0, Block3Context);
	}
	public block4(): Block4Context | undefined {
		return this.tryGetRuleContext(0, Block4Context);
	}
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_blockContent1; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlockContent1) {
			listener.enterBlockContent1(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlockContent1) {
			listener.exitBlockContent1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlockContent1) {
			return visitor.visitBlockContent1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block2Context extends ParserRuleContext {
	public _blockContent2: BlockContent2Context;
	public _content: BlockContent2Context[] = [];
	public OpenBlock2(): TerminalNode { return this.getToken(KojiParser.OpenBlock2, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public HeaderLb(): TerminalNode { return this.getToken(KojiParser.HeaderLb, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public CloseBlock2(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseBlock2, 0); }
	public blockContent2(): BlockContent2Context[];
	public blockContent2(i: number): BlockContent2Context;
	public blockContent2(i?: number): BlockContent2Context | BlockContent2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContent2Context);
		} else {
			return this.getRuleContext(i, BlockContent2Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block2; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock2) {
			listener.enterBlock2(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock2) {
			listener.exitBlock2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock2) {
			return visitor.visitBlock2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContent2Context extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	public block3(): Block3Context | undefined {
		return this.tryGetRuleContext(0, Block3Context);
	}
	public block4(): Block4Context | undefined {
		return this.tryGetRuleContext(0, Block4Context);
	}
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_blockContent2; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlockContent2) {
			listener.enterBlockContent2(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlockContent2) {
			listener.exitBlockContent2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlockContent2) {
			return visitor.visitBlockContent2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block3Context extends ParserRuleContext {
	public _blockContent3: BlockContent3Context;
	public _content: BlockContent3Context[] = [];
	public OpenBlock3(): TerminalNode { return this.getToken(KojiParser.OpenBlock3, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public HeaderLb(): TerminalNode { return this.getToken(KojiParser.HeaderLb, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public CloseBlock3(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseBlock3, 0); }
	public blockContent3(): BlockContent3Context[];
	public blockContent3(i: number): BlockContent3Context;
	public blockContent3(i?: number): BlockContent3Context | BlockContent3Context[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContent3Context);
		} else {
			return this.getRuleContext(i, BlockContent3Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block3; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock3) {
			listener.enterBlock3(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock3) {
			listener.exitBlock3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock3) {
			return visitor.visitBlock3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContent3Context extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	public block4(): Block4Context | undefined {
		return this.tryGetRuleContext(0, Block4Context);
	}
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_blockContent3; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlockContent3) {
			listener.enterBlockContent3(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlockContent3) {
			listener.exitBlockContent3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlockContent3) {
			return visitor.visitBlockContent3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block4Context extends ParserRuleContext {
	public _blockContent4: BlockContent4Context;
	public _content: BlockContent4Context[] = [];
	public OpenBlock4(): TerminalNode { return this.getToken(KojiParser.OpenBlock4, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public HeaderLb(): TerminalNode { return this.getToken(KojiParser.HeaderLb, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public CloseBlock4(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseBlock4, 0); }
	public blockContent4(): BlockContent4Context[];
	public blockContent4(i: number): BlockContent4Context;
	public blockContent4(i?: number): BlockContent4Context | BlockContent4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContent4Context);
		} else {
			return this.getRuleContext(i, BlockContent4Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block4; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock4) {
			listener.enterBlock4(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock4) {
			listener.exitBlock4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock4) {
			return visitor.visitBlock4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContent4Context extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	public block5(): Block5Context | undefined {
		return this.tryGetRuleContext(0, Block5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_blockContent4; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlockContent4) {
			listener.enterBlockContent4(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlockContent4) {
			listener.exitBlockContent4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlockContent4) {
			return visitor.visitBlockContent4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block5Context extends ParserRuleContext {
	public _blockContent5: BlockContent5Context;
	public _content: BlockContent5Context[] = [];
	public OpenBlock5(): TerminalNode { return this.getToken(KojiParser.OpenBlock5, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public HeaderLb(): TerminalNode { return this.getToken(KojiParser.HeaderLb, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	public CloseBlock5(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseBlock5, 0); }
	public blockContent5(): BlockContent5Context[];
	public blockContent5(i: number): BlockContent5Context;
	public blockContent5(i?: number): BlockContent5Context | BlockContent5Context[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContent5Context);
		} else {
			return this.getRuleContext(i, BlockContent5Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_block5; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlock5) {
			listener.enterBlock5(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlock5) {
			listener.exitBlock5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlock5) {
			return visitor.visitBlock5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContent5Context extends ParserRuleContext {
	public syntaxSugar(): SyntaxSugarContext | undefined {
		return this.tryGetRuleContext(0, SyntaxSugarContext);
	}
	public textSegment(): TextSegmentContext | undefined {
		return this.tryGetRuleContext(0, TextSegmentContext);
	}
	public inline(): InlineContext | undefined {
		return this.tryGetRuleContext(0, InlineContext);
	}
	public Lb(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Lb, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_blockContent5; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBlockContent5) {
			listener.enterBlockContent5(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBlockContent5) {
			listener.exitBlockContent5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBlockContent5) {
			return visitor.visitBlockContent5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextSegmentContext extends ParserRuleContext {
	public Kanji(): TerminalNode[];
	public Kanji(i: number): TerminalNode;
	public Kanji(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Kanji);
		} else {
			return this.getToken(KojiParser.Kanji, i);
		}
	}
	public Kana(): TerminalNode[];
	public Kana(i: number): TerminalNode;
	public Kana(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Kana);
		} else {
			return this.getToken(KojiParser.Kana, i);
		}
	}
	public NonJp(): TerminalNode[];
	public NonJp(i: number): TerminalNode;
	public NonJp(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.NonJp);
		} else {
			return this.getToken(KojiParser.NonJp, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_textSegment; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterTextSegment) {
			listener.enterTextSegment(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitTextSegment) {
			listener.exitTextSegment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitTextSegment) {
			return visitor.visitTextSegment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostPositionedAttrsContext extends ParserRuleContext {
	public AttrsOpen(): TerminalNode { return this.getToken(KojiParser.AttrsOpen, 0); }
	public AttrsClose(): TerminalNode { return this.getToken(KojiParser.AttrsClose, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(KojiParser.ID, 0); }
	public Class(): TerminalNode[];
	public Class(i: number): TerminalNode;
	public Class(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Class);
		} else {
			return this.getToken(KojiParser.Class, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_postPositionedAttrs; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterPostPositionedAttrs) {
			listener.enterPostPositionedAttrs(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitPostPositionedAttrs) {
			listener.exitPostPositionedAttrs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitPostPositionedAttrs) {
			return visitor.visitPostPositionedAttrs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyntaxSugarContext extends ParserRuleContext {
	public furigana(): FuriganaContext | undefined {
		return this.tryGetRuleContext(0, FuriganaContext);
	}
	public kaeriten(): KaeritenContext | undefined {
		return this.tryGetRuleContext(0, KaeritenContext);
	}
	public okurigana(): OkuriganaContext | undefined {
		return this.tryGetRuleContext(0, OkuriganaContext);
	}
	public tateten(): TatetenContext | undefined {
		return this.tryGetRuleContext(0, TatetenContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public illegible(): IllegibleContext | undefined {
		return this.tryGetRuleContext(0, IllegibleContext);
	}
	public bugHole(): BugHoleContext | undefined {
		return this.tryGetRuleContext(0, BugHoleContext);
	}
	public person(): PersonContext | undefined {
		return this.tryGetRuleContext(0, PersonContext);
	}
	public place(): PlaceContext | undefined {
		return this.tryGetRuleContext(0, PlaceContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_syntaxSugar; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterSyntaxSugar) {
			listener.enterSyntaxSugar(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitSyntaxSugar) {
			listener.exitSyntaxSugar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitSyntaxSugar) {
			return visitor.visitSyntaxSugar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuriganaTargetContext extends ParserRuleContext {
	public Kanji(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Kanji, 0); }
	public Kana(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Kana, 0); }
	public NonJp(): TerminalNode | undefined { return this.tryGetToken(KojiParser.NonJp, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public illegible(): IllegibleContext | undefined {
		return this.tryGetRuleContext(0, IllegibleContext);
	}
	public bugHole(): BugHoleContext | undefined {
		return this.tryGetRuleContext(0, BugHoleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_furiganaTarget; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterFuriganaTarget) {
			listener.enterFuriganaTarget(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitFuriganaTarget) {
			listener.exitFuriganaTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitFuriganaTarget) {
			return visitor.visitFuriganaTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuriganaContext extends ParserRuleContext {
	public _target: FuriganaTargetContext;
	public _right: Token;
	public _left: Token;
	public FuriganaOpen(): TerminalNode { return this.getToken(KojiParser.FuriganaOpen, 0); }
	public FuriganaClose(): TerminalNode { return this.getToken(KojiParser.FuriganaClose, 0); }
	public FuriganaContent(): TerminalNode[];
	public FuriganaContent(i: number): TerminalNode;
	public FuriganaContent(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.FuriganaContent);
		} else {
			return this.getToken(KojiParser.FuriganaContent, i);
		}
	}
	public FuriganaPre(): TerminalNode | undefined { return this.tryGetToken(KojiParser.FuriganaPre, 0); }
	public furiganaTarget(): FuriganaTargetContext | undefined {
		return this.tryGetRuleContext(0, FuriganaTargetContext);
	}
	public FuriganaSep(): TerminalNode | undefined { return this.tryGetToken(KojiParser.FuriganaSep, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_furigana; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterFurigana) {
			listener.enterFurigana(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitFurigana) {
			listener.exitFurigana(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitFurigana) {
			return visitor.visitFurigana(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KaeritenContext extends ParserRuleContext {
	public _content: Token;
	public KaeritenMark(): TerminalNode { return this.getToken(KojiParser.KaeritenMark, 0); }
	public KaeritenChar(): TerminalNode[];
	public KaeritenChar(i: number): TerminalNode;
	public KaeritenChar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.KaeritenChar);
		} else {
			return this.getToken(KojiParser.KaeritenChar, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_kaeriten; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterKaeriten) {
			listener.enterKaeriten(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitKaeriten) {
			listener.exitKaeriten(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitKaeriten) {
			return visitor.visitKaeriten(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OkuriganaContext extends ParserRuleContext {
	public _content: Token;
	public OkuriganaMark(): TerminalNode { return this.getToken(KojiParser.OkuriganaMark, 0); }
	public Kana(): TerminalNode { return this.getToken(KojiParser.Kana, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_okurigana; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterOkurigana) {
			listener.enterOkurigana(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitOkurigana) {
			listener.exitOkurigana(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitOkurigana) {
			return visitor.visitOkurigana(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TatetenContext extends ParserRuleContext {
	public TatetenChar(): TerminalNode { return this.getToken(KojiParser.TatetenChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_tateten; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterTateten) {
			listener.enterTateten(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitTateten) {
			listener.exitTateten(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitTateten) {
			return visitor.visitTateten(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public _content: Token;
	public AnnotationOpen(): TerminalNode { return this.getToken(KojiParser.AnnotationOpen, 0); }
	public AnnotationContent(): TerminalNode { return this.getToken(KojiParser.AnnotationContent, 0); }
	public AnnotationClose(): TerminalNode | undefined { return this.tryGetToken(KojiParser.AnnotationClose, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(KojiParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_annotation; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IllegibleContext extends ParserRuleContext {
	public IllegibleMark(): TerminalNode[];
	public IllegibleMark(i: number): TerminalNode;
	public IllegibleMark(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.IllegibleMark);
		} else {
			return this.getToken(KojiParser.IllegibleMark, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_illegible; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterIllegible) {
			listener.enterIllegible(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitIllegible) {
			listener.exitIllegible(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitIllegible) {
			return visitor.visitIllegible(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BugHoleContext extends ParserRuleContext {
	public BugHoleMark(): TerminalNode[];
	public BugHoleMark(i: number): TerminalNode;
	public BugHoleMark(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.BugHoleMark);
		} else {
			return this.getToken(KojiParser.BugHoleMark, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_bugHole; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterBugHole) {
			listener.enterBugHole(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitBugHole) {
			listener.exitBugHole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitBugHole) {
			return visitor.visitBugHole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PersonContext extends ParserRuleContext {
	public _inlineContent: InlineContentContext;
	public _content: InlineContentContext[] = [];
	public PersonOpen(): TerminalNode { return this.getToken(KojiParser.PersonOpen, 0); }
	public PersonClose(): TerminalNode { return this.getToken(KojiParser.PersonClose, 0); }
	public postPositionedAttrs(): PostPositionedAttrsContext | undefined {
		return this.tryGetRuleContext(0, PostPositionedAttrsContext);
	}
	public inlineContent(): InlineContentContext[];
	public inlineContent(i: number): InlineContentContext;
	public inlineContent(i?: number): InlineContentContext | InlineContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentContext);
		} else {
			return this.getRuleContext(i, InlineContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_person; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterPerson) {
			listener.enterPerson(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitPerson) {
			listener.exitPerson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitPerson) {
			return visitor.visitPerson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlaceContext extends ParserRuleContext {
	public _inlineContent: InlineContentContext;
	public _content: InlineContentContext[] = [];
	public PlaceOpen(): TerminalNode { return this.getToken(KojiParser.PlaceOpen, 0); }
	public PlaceClose(): TerminalNode { return this.getToken(KojiParser.PlaceClose, 0); }
	public postPositionedAttrs(): PostPositionedAttrsContext | undefined {
		return this.tryGetRuleContext(0, PostPositionedAttrsContext);
	}
	public inlineContent(): InlineContentContext[];
	public inlineContent(i: number): InlineContentContext;
	public inlineContent(i?: number): InlineContentContext | InlineContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentContext);
		} else {
			return this.getRuleContext(i, InlineContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_place; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterPlace) {
			listener.enterPlace(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitPlace) {
			listener.exitPlace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitPlace) {
			return visitor.visitPlace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public _inlineContent: InlineContentContext;
	public _content: InlineContentContext[] = [];
	public DateOpen(): TerminalNode { return this.getToken(KojiParser.DateOpen, 0); }
	public DateClose(): TerminalNode { return this.getToken(KojiParser.DateClose, 0); }
	public postPositionedAttrs(): PostPositionedAttrsContext | undefined {
		return this.tryGetRuleContext(0, PostPositionedAttrsContext);
	}
	public inlineContent(): InlineContentContext[];
	public inlineContent(i: number): InlineContentContext;
	public inlineContent(i?: number): InlineContentContext | InlineContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentContext);
		} else {
			return this.getRuleContext(i, InlineContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KojiParser.RULE_date; }
	// @Override
	public enterRule(listener: KojiParserListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: KojiParserListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KojiParserVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


