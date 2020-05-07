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
	public static readonly FuriganaOpen = 14;
	public static readonly AnnotationOpen = 15;
	public static readonly AnnotationClose = 16;
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
	public static readonly Illegible = 27;
	public static readonly BugHole = 28;
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
	public static readonly RULE_furigana = 19;
	public static readonly RULE_kaeriten = 20;
	public static readonly RULE_okurigana = 21;
	public static readonly RULE_tateten = 22;
	public static readonly RULE_annotation = 23;
	public static readonly RULE_illegible = 24;
	public static readonly RULE_bugHole = 25;
	public static readonly RULE_person = 26;
	public static readonly RULE_place = 27;
	public static readonly RULE_date = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"koji", "list", "inline", "inlineContentSeq", "inlineContent", "block", 
		"block1", "blockContent1", "block2", "blockContent2", "block3", "blockContent3", 
		"block4", "blockContent4", "block5", "blockContent5", "textSegment", "postPositionedAttrs", 
		"syntaxSugar", "furigana", "kaeriten", "okurigana", "tateten", "annotation", 
		"illegible", "bugHole", "person", "place", "date",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\uFF05'", "'\n\n'", "'\uFF05\uFF05'", "'\n\uFF05\n'", "'\uFF05\uFF05\uFF05'", 
		"'\n\uFF05\uFF05\n'", "'\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\n'", 
		"'\uFF05\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\uFF05\n'", 
		"'\u300A'", "'\u300B'", undefined, "'\uFF08'", "'\u3010'", "'\u3011'", 
		"'\uFF5B'", "'\uFF5D'", "'\u3014'", "'\u3015'", "'\uFF1C'", "'\uFF1E'", 
		"'\uFF3B'", "'\uFF3F'", undefined, "'\uFFE3'", "'\u25A1'", "'\u25A0'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'\uFF1A'", undefined, "'\uFF3D'", undefined, undefined, undefined, 
		undefined, "'\uFF09'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "Bar", "FuriganaOpen", "AnnotationOpen", 
		"AnnotationClose", "PersonOpen", "PersonClose", "PlaceOpen", "PlaceClose", 
		"DateOpen", "DateClose", "AttrsOpen", "KaeritenMark", "TatetenChar", "OkuriganaMark", 
		"Illegible", "BugHole", "NonJp", "Kanji", "Kana", "NonJpChar", "KanjiChar", 
		"Lb", "WS", "ElemName", "Colon", "HeaderLb", "AttrsClose", "ID", "Class", 
		"FuriganaContent", "FuriganaSep", "FuriganaClose", "KaeritenChar",
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
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenBlock1) | (1 << KojiParser.OpenBlock2) | (1 << KojiParser.OpenBlock3) | (1 << KojiParser.OpenBlock4) | (1 << KojiParser.OpenBlock5) | (1 << KojiParser.OpenInline) | (1 << KojiParser.AnnotationOpen) | (1 << KojiParser.PersonOpen) | (1 << KojiParser.PlaceOpen) | (1 << KojiParser.DateOpen) | (1 << KojiParser.KaeritenMark) | (1 << KojiParser.TatetenChar) | (1 << KojiParser.OkuriganaMark) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana))) !== 0) || _la === KojiParser.Lb) {
				{
				{
				this.state = 58;
				this.list();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
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
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.inline();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 68;
				this.syntaxSugar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 69;
				this.textSegment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 70;
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
			this.state = 73;
			this.match(KojiParser.OpenInline);
			this.state = 74;
			this.match(KojiParser.ElemName);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 75;
				this.match(KojiParser.ID);
				}
			}

			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 78;
				this.match(KojiParser.Class);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(KojiParser.Colon);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0)) {
				{
				{
				this.state = 85;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Bar) {
				{
				{
				this.state = 91;
				this.match(KojiParser.Bar);
				this.state = 92;
				_localctx._inlineContentSeq = this.inlineContentSeq();
				_localctx._extra.push(_localctx._inlineContentSeq);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
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
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0)) {
				{
				{
				this.state = 100;
				this.inlineContent();
				}
				}
				this.state = 105;
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
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 106;
				this.syntaxSugar();
				}
				break;

			case 2:
				{
				this.state = 107;
				this.textSegment();
				}
				break;

			case 3:
				{
				this.state = 108;
				this.inline();
				}
				break;

			case 4:
				{
				this.state = 109;
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
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.OpenBlock1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.block1();
				}
				break;
			case KojiParser.OpenBlock2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.block2();
				}
				break;
			case KojiParser.OpenBlock3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
				this.block3();
				}
				break;
			case KojiParser.OpenBlock4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.block4();
				}
				break;
			case KojiParser.OpenBlock5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
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
			this.state = 119;
			this.match(KojiParser.OpenBlock1);
			this.state = 120;
			this.match(KojiParser.ElemName);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 121;
				this.match(KojiParser.ID);
				}
			}

			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 124;
				this.match(KojiParser.Class);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(KojiParser.HeaderLb);
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 131;
					_localctx._blockContent1 = this.blockContent1();
					_localctx._content.push(_localctx._blockContent1);
					}
					}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock1) {
				{
				this.state = 137;
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
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 142;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 143;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 144;
				this.block2();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 145;
				this.block3();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 146;
				this.block4();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 147;
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
			this.state = 150;
			this.match(KojiParser.OpenBlock2);
			this.state = 151;
			this.match(KojiParser.ElemName);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 152;
				this.match(KojiParser.ID);
				}
			}

			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 155;
				this.match(KojiParser.Class);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
			this.match(KojiParser.HeaderLb);
			this.state = 165;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 162;
					_localctx._blockContent2 = this.blockContent2();
					_localctx._content.push(_localctx._blockContent2);
					}
					}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock2) {
				{
				this.state = 168;
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
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 174;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 175;
				this.block3();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 176;
				this.block4();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 177;
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
			this.state = 180;
			this.match(KojiParser.OpenBlock3);
			this.state = 181;
			this.match(KojiParser.ElemName);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 182;
				this.match(KojiParser.ID);
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 185;
				this.match(KojiParser.Class);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(KojiParser.HeaderLb);
			this.state = 195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 192;
					_localctx._blockContent3 = this.blockContent3();
					_localctx._content.push(_localctx._blockContent3);
					}
					}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock3) {
				{
				this.state = 198;
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
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 203;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 204;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 205;
				this.block4();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 206;
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
			this.state = 209;
			this.match(KojiParser.OpenBlock4);
			this.state = 210;
			this.match(KojiParser.ElemName);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 211;
				this.match(KojiParser.ID);
				}
			}

			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 214;
				this.match(KojiParser.Class);
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
			this.match(KojiParser.HeaderLb);
			this.state = 224;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					_localctx._blockContent4 = this.blockContent4();
					_localctx._content.push(_localctx._blockContent4);
					}
					}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock4) {
				{
				this.state = 227;
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
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 234;
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
			this.state = 237;
			this.match(KojiParser.OpenBlock5);
			this.state = 238;
			this.match(KojiParser.ElemName);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 239;
				this.match(KojiParser.ID);
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 242;
				this.match(KojiParser.Class);
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this.match(KojiParser.HeaderLb);
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 249;
					_localctx._blockContent5 = this.blockContent5();
					_localctx._content.push(_localctx._blockContent5);
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock5) {
				{
				this.state = 255;
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
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 261;
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
			this.state = 265;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 264;
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
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
			this.state = 269;
			this.match(KojiParser.AttrsOpen);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 270;
				this.match(KojiParser.ID);
				}
			}

			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 273;
				this.match(KojiParser.Class);
				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
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
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.NonJp:
			case KojiParser.Kanji:
			case KojiParser.Kana:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.furigana();
				}
				break;
			case KojiParser.KaeritenMark:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.kaeriten();
				}
				break;
			case KojiParser.OkuriganaMark:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 283;
				this.okurigana();
				}
				break;
			case KojiParser.TatetenChar:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 284;
				this.tateten();
				}
				break;
			case KojiParser.AnnotationOpen:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 285;
				this.annotation();
				}
				break;
			case KojiParser.Illegible:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 286;
				this.illegible();
				}
				break;
			case KojiParser.BugHole:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 287;
				this.bugHole();
				}
				break;
			case KojiParser.PersonOpen:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 288;
				this.person();
				}
				break;
			case KojiParser.PlaceOpen:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 289;
				this.place();
				}
				break;
			case KojiParser.DateOpen:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 290;
				this.date();
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
		this.enterRule(_localctx, 38, KojiParser.RULE_furigana);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.Kanji:
				{
				this.state = 293;
				_localctx._target = this.match(KojiParser.Kanji);
				}
				break;
			case KojiParser.Kana:
				{
				this.state = 294;
				_localctx._target = this.match(KojiParser.Kana);
				}
				break;
			case KojiParser.NonJp:
				{
				this.state = 295;
				_localctx._target = this.match(KojiParser.NonJp);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 298;
			this.match(KojiParser.FuriganaOpen);
			this.state = 299;
			_localctx._right = this.match(KojiParser.FuriganaContent);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.FuriganaSep) {
				{
				this.state = 300;
				this.match(KojiParser.FuriganaSep);
				this.state = 301;
				_localctx._left = this.match(KojiParser.FuriganaContent);
				}
			}

			this.state = 304;
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
		this.enterRule(_localctx, 40, KojiParser.RULE_kaeriten);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(KojiParser.KaeritenMark);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 307;
				_localctx._content = this.match(KojiParser.KaeritenChar);
				}
				}
				this.state = 310;
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
		this.enterRule(_localctx, 42, KojiParser.RULE_okurigana);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(KojiParser.OkuriganaMark);
			this.state = 313;
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
		this.enterRule(_localctx, 44, KojiParser.RULE_tateten);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
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
		this.enterRule(_localctx, 46, KojiParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(KojiParser.AnnotationOpen);
			this.state = 318;
			_localctx._content = this.textSegment();
			this.state = 319;
			this.match(KojiParser.AnnotationClose);
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
		this.enterRule(_localctx, 48, KojiParser.RULE_illegible);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(KojiParser.Illegible);
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
		this.enterRule(_localctx, 50, KojiParser.RULE_bugHole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(KojiParser.BugHole);
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
		this.enterRule(_localctx, 52, KojiParser.RULE_person);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(KojiParser.PersonOpen);
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 326;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 331;
			this.match(KojiParser.PersonClose);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.AttrsOpen) {
				{
				this.state = 332;
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
		this.enterRule(_localctx, 54, KojiParser.RULE_place);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(KojiParser.PlaceOpen);
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
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 341;
			this.match(KojiParser.PlaceClose);
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, KojiParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(KojiParser.DateOpen);
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
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.TatetenChar - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0));
			this.state = 351;
			this.match(KojiParser.DateClose);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u0166\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x05\x04O\n\x04\x03\x04\x07\x04R\n\x04\f\x04\x0E\x04" +
		"U\v\x04\x03\x04\x03\x04\x07\x04Y\n\x04\f\x04\x0E\x04\\\v\x04\x03\x04\x03" +
		"\x04\x07\x04`\n\x04\f\x04\x0E\x04c\v\x04\x03\x04\x03\x04\x03\x05\x07\x05" +
		"h\n\x05\f\x05\x0E\x05k\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06q" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07x\n\x07\x03\b\x03" +
		"\b\x03\b\x05\b}\n\b\x03\b\x07\b\x80\n\b\f\b\x0E\b\x83\v\b\x03\b\x03\b" +
		"\x07\b\x87\n\b\f\b\x0E\b\x8A\v\b\x03\b\x05\b\x8D\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x97\n\t\x03\n\x03\n\x03\n\x05\n\x9C" +
		"\n\n\x03\n\x07\n\x9F\n\n\f\n\x0E\n\xA2\v\n\x03\n\x03\n\x07\n\xA6\n\n\f" +
		"\n\x0E\n\xA9\v\n\x03\n\x05\n\xAC\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\xB5\n\v\x03\f\x03\f\x03\f\x05\f\xBA\n\f\x03\f\x07\f\xBD" +
		"\n\f\f\f\x0E\f\xC0\v\f\x03\f\x03\f\x07\f\xC4\n\f\f\f\x0E\f\xC7\v\f\x03" +
		"\f\x05\f\xCA\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xD2\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xD7\n\x0E\x03\x0E\x07\x0E\xDA\n\x0E\f\x0E" +
		"\x0E\x0E\xDD\v\x0E\x03\x0E\x03\x0E\x07\x0E\xE1\n\x0E\f\x0E\x0E\x0E\xE4" +
		"\v\x0E\x03\x0E\x05\x0E\xE7\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xEE\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF3\n\x10\x03\x10\x07" +
		"\x10\xF6\n\x10\f\x10\x0E\x10\xF9\v\x10\x03\x10\x03\x10\x07\x10\xFD\n\x10" +
		"\f\x10\x0E\x10\u0100\v\x10\x03\x10\x05\x10\u0103\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0109\n\x11\x03\x12\x06\x12\u010C\n\x12\r\x12" +
		"\x0E\x12\u010D\x03\x13\x03\x13\x05\x13\u0112\n\x13\x03\x13\x07\x13\u0115" +
		"\n\x13\f\x13\x0E\x13\u0118\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0126" +
		"\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u012B\n\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0131\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x06\x16" +
		"\u0137\n\x16\r\x16\x0E\x16\u0138\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x06\x1C\u014A\n\x1C\r\x1C\x0E\x1C\u014B\x03\x1C\x03\x1C\x05\x1C" +
		"\u0150\n\x1C\x03\x1D\x03\x1D\x06\x1D\u0154\n\x1D\r\x1D\x0E\x1D\u0155\x03" +
		"\x1D\x03\x1D\x05\x1D\u015A\n\x1D\x03\x1E\x03\x1E\x06\x1E\u015E\n\x1E\r" +
		"\x1E\x0E\x1E\u015F\x03\x1E\x03\x1E\x05\x1E\u0164\n\x1E\x03\x1E\x02\x02" +
		"\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02\x03\x03\x02" +
		"\x1F!\x02\u019C\x02?\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06K\x03\x02" +
		"\x02\x02\bi\x03\x02\x02\x02\np\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E" +
		"y\x03\x02\x02\x02\x10\x96\x03\x02\x02\x02\x12\x98\x03\x02\x02\x02\x14" +
		"\xB4\x03\x02\x02\x02\x16\xB6\x03\x02\x02\x02\x18\xD1\x03\x02\x02\x02\x1A" +
		"\xD3\x03\x02\x02\x02\x1C\xED\x03\x02\x02\x02\x1E\xEF\x03\x02\x02\x02 " +
		"\u0108\x03\x02\x02\x02\"\u010B\x03\x02\x02\x02$\u010F\x03\x02\x02\x02" +
		"&\u0125\x03\x02\x02\x02(\u012A\x03\x02\x02\x02*\u0134\x03\x02\x02\x02" +
		",\u013A\x03\x02\x02\x02.\u013D\x03\x02\x02\x020\u013F\x03\x02\x02\x02" +
		"2\u0143\x03\x02\x02\x024\u0145\x03\x02\x02\x026\u0147\x03\x02\x02\x02" +
		"8\u0151\x03\x02\x02\x02:\u015B\x03\x02\x02\x02<>\x05\x04\x03\x02=<\x03" +
		"\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03" +
		"\x02\x02\x02A?\x03\x02\x02\x02BC\x07\x02\x02\x03C\x03\x03\x02\x02\x02" +
		"DJ\x05\f\x07\x02EJ\x05\x06\x04\x02FJ\x05&\x14\x02GJ\x05\"\x12\x02HJ\x07" +
		"$\x02\x02ID\x03\x02\x02\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03" +
		"\x02\x02\x02IH\x03\x02\x02\x02J\x05\x03\x02\x02\x02KL\x07\r\x02\x02LN" +
		"\x07&\x02\x02MO\x07*\x02\x02NM\x03\x02\x02\x02NO\x03\x02\x02\x02OS\x03" +
		"\x02\x02\x02PR\x07+\x02\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03" +
		"\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VZ\x07" +
		"\'\x02\x02WY\x05\n\x06\x02XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03" +
		"\x02\x02\x02Z[\x03\x02\x02\x02[a\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^" +
		"\x07\x0F\x02\x02^`\x05\b\x05\x02_]\x03\x02\x02\x02`c\x03\x02\x02\x02a" +
		"_\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02" +
		"de\x07\x0E\x02\x02e\x07\x03\x02\x02\x02fh\x05\n\x06\x02gf\x03\x02\x02" +
		"\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\t\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02lq\x05&\x14\x02mq\x05\"\x12\x02nq\x05\x06\x04" +
		"\x02oq\x07$\x02\x02pl\x03\x02\x02\x02pm\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02po\x03\x02\x02\x02q\v\x03\x02\x02\x02rx\x05\x0E\b\x02sx\x05\x12\n" +
		"\x02tx\x05\x16\f\x02ux\x05\x1A\x0E\x02vx\x05\x1E\x10\x02wr\x03\x02\x02" +
		"\x02ws\x03\x02\x02\x02wt\x03\x02\x02\x02wu\x03\x02\x02\x02wv\x03\x02\x02" +
		"\x02x\r\x03\x02\x02\x02yz\x07\x03\x02\x02z|\x07&\x02\x02{}\x07*\x02\x02" +
		"|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x81\x03\x02\x02\x02~\x80\x07+\x02" +
		"\x02\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02" +
		"\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02" +
		"\x02\x84\x88\x07(\x02\x02\x85\x87\x05\x10\t\x02\x86\x85\x03\x02\x02\x02" +
		"\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02" +
		"\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8D\x07\x04\x02\x02" +
		"\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x0F\x03\x02\x02\x02" +
		"\x8E\x97\x05&\x14\x02\x8F\x97\x05\"\x12\x02\x90\x97\x05\x06\x04\x02\x91" +
		"\x97\x07$\x02\x02\x92\x97\x05\x12\n\x02\x93\x97\x05\x16\f\x02\x94\x97" +
		"\x05\x1A\x0E\x02\x95\x97\x05\x1E\x10\x02\x96\x8E\x03\x02\x02\x02\x96\x8F" +
		"\x03\x02\x02\x02\x96\x90\x03\x02\x02\x02\x96\x91\x03\x02\x02\x02\x96\x92" +
		"\x03\x02\x02\x02\x96\x93\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x95" +
		"\x03\x02\x02\x02\x97\x11\x03\x02\x02\x02\x98\x99\x07\x05\x02\x02\x99\x9B" +
		"\x07&\x02\x02\x9A\x9C\x07*\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\xA0\x03\x02\x02\x02\x9D\x9F\x07+\x02\x02\x9E\x9D\x03" +
		"\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA7\x07" +
		"(\x02\x02\xA4\xA6\x05\x14\v\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02" +
		"\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAB\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAC\x07\x06\x02\x02\xAB\xAA\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\x13\x03\x02\x02\x02\xAD\xB5\x05&" +
		"\x14\x02\xAE\xB5\x05\"\x12\x02\xAF\xB5\x05\x06\x04\x02\xB0\xB5\x07$\x02" +
		"\x02\xB1\xB5\x05\x16\f\x02\xB2\xB5\x05\x1A\x0E\x02\xB3\xB5\x05\x1E\x10" +
		"\x02\xB4\xAD\x03\x02\x02\x02\xB4\xAE\x03\x02\x02\x02\xB4\xAF\x03\x02\x02" +
		"\x02\xB4\xB0\x03\x02\x02\x02\xB4\xB1\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB4\xB3\x03\x02\x02\x02\xB5\x15\x03\x02\x02\x02\xB6\xB7\x07\x07\x02" +
		"\x02\xB7\xB9\x07&\x02\x02\xB8\xBA\x07*\x02\x02\xB9\xB8\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03\x02\x02\x02\xBB\xBD\x07+\x02\x02" +
		"\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
		"\xC1\xC5\x07(\x02\x02\xC2\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02\x02\xC4" +
		"\xC7\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6" +
		"\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x07\b\x02\x02\xC9" +
		"\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x17\x03\x02\x02\x02\xCB" +
		"\xD2\x05&\x14\x02\xCC\xD2\x05\"\x12\x02\xCD\xD2\x05\x06\x04\x02\xCE\xD2" +
		"\x07$\x02\x02\xCF\xD2\x05\x1A\x0E\x02\xD0\xD2\x05\x1E\x10\x02\xD1\xCB" +
		"\x03\x02\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xCE" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\x19" +
		"\x03\x02\x02\x02\xD3\xD4\x07\t\x02\x02\xD4\xD6\x07&\x02\x02\xD5\xD7\x07" +
		"*\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDB\x03" +
		"\x02\x02\x02\xD8\xDA\x07+\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03" +
		"\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03" +
		"\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE2\x07(\x02\x02\xDF\xE1\x05" +
		"\x1C\x0F\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03" +
		"\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03" +
		"\x02\x02\x02\xE5\xE7\x07\n\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\x1B\x03\x02\x02\x02\xE8\xEE\x05&\x14\x02\xE9\xEE\x05" +
		"\"\x12\x02\xEA\xEE\x05\x06\x04\x02\xEB\xEE\x07$\x02\x02\xEC\xEE\x05\x1E" +
		"\x10\x02\xED\xE8\x03\x02\x02\x02\xED\xE9\x03\x02\x02\x02\xED\xEA\x03\x02" +
		"\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\x1D\x03\x02" +
		"\x02\x02\xEF\xF0\x07\v\x02\x02\xF0\xF2\x07&\x02\x02\xF1\xF3\x07*\x02\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF7\x03\x02\x02\x02" +
		"\xF4\xF6\x07+\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02" +
		"\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xFA\xFE\x07(\x02\x02\xFB\xFD\x05 \x11\x02\xFC" +
		"\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0101\u0103\x07\f\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\x1F\x03\x02\x02\x02\u0104\u0109\x05&\x14\x02\u0105" +
		"\u0109\x05\"\x12\x02\u0106\u0109\x05\x06\x04\x02\u0107\u0109\x07$\x02" +
		"\x02\u0108\u0104\x03\x02\x02\x02\u0108\u0105\x03\x02\x02\x02\u0108\u0106" +
		"\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109!\x03\x02\x02\x02\u010A" +
		"\u010C\t\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02" +
		"\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E#\x03" +
		"\x02\x02\x02\u010F\u0111\x07\x19\x02\x02\u0110\u0112\x07*\x02\x02\u0111" +
		"\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0116\x03\x02" +
		"\x02\x02\u0113\u0115\x07+\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07" +
		")\x02\x02\u011A%\x03\x02\x02\x02\u011B\u0126\x05(\x15\x02\u011C\u0126" +
		"\x05*\x16\x02\u011D\u0126\x05,\x17\x02\u011E\u0126\x05.\x18\x02\u011F" +
		"\u0126\x050\x19\x02\u0120\u0126\x052\x1A\x02\u0121\u0126\x054\x1B\x02" +
		"\u0122\u0126\x056\x1C\x02\u0123\u0126\x058\x1D\x02\u0124\u0126\x05:\x1E" +
		"\x02\u0125\u011B\x03\x02\x02\x02\u0125\u011C\x03\x02\x02\x02\u0125\u011D" +
		"\x03\x02\x02\x02\u0125\u011E\x03\x02\x02\x02\u0125\u011F\x03\x02\x02\x02" +
		"\u0125\u0120\x03\x02\x02\x02\u0125\u0121\x03\x02\x02\x02\u0125\u0122\x03" +
		"\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126" +
		"\'\x03\x02\x02\x02\u0127\u012B\x07 \x02\x02\u0128\u012B\x07!\x02\x02\u0129" +
		"\u012B\x07\x1F\x02\x02\u012A\u0127\x03\x02\x02\x02\u012A\u0128\x03\x02" +
		"\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012D\x07\x10\x02\x02\u012D\u0130\x07,\x02\x02\u012E\u012F\x07-\x02\x02" +
		"\u012F\u0131\x07,\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x07.\x02\x02\u0133" +
		")\x03\x02\x02\x02\u0134\u0136\x07\x1A\x02\x02\u0135\u0137\x07/\x02\x02" +
		"\u0136\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0136\x03" +
		"\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139+\x03\x02\x02\x02\u013A" +
		"\u013B\x07\x1C\x02\x02\u013B\u013C\x07!\x02\x02\u013C-\x03\x02\x02\x02" +
		"\u013D\u013E\x07\x1B\x02\x02\u013E/\x03\x02\x02\x02\u013F\u0140\x07\x11" +
		"\x02\x02\u0140\u0141\x05\"\x12\x02\u0141\u0142\x07\x12\x02\x02\u01421" +
		"\x03\x02\x02\x02\u0143\u0144\x07\x1D\x02\x02\u01443\x03\x02\x02\x02\u0145" +
		"\u0146\x07\x1E\x02\x02\u01465\x03\x02\x02\x02\u0147\u0149\x07\x13\x02" +
		"\x02\u0148\u014A\x05\n\x06\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x07\x14\x02\x02\u014E\u0150\x05" +
		"$\x13\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"7\x03\x02\x02\x02\u0151\u0153\x07\x15\x02\x02\u0152\u0154\x05\n\x06\x02" +
		"\u0153\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0153\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u0159\x07\x16\x02\x02\u0158\u015A\x05$\x13\x02\u0159\u0158\x03\x02\x02" +
		"\x02\u0159\u015A\x03\x02\x02\x02\u015A9\x03\x02\x02\x02\u015B\u015D\x07" +
		"\x17\x02\x02\u015C\u015E\x05\n\x06\x02\u015D\u015C\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x07\x18\x02\x02\u0162" +
		"\u0164\x05$\x13\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02" +
		"\x02\u0164;\x03\x02\x02\x021?INSZaipw|\x81\x88\x8C\x96\x9B\xA0\xA7\xAB" +
		"\xB4\xB9\xBE\xC5\xC9\xD1\xD6\xDB\xE2\xE6\xED\xF2\xF7\xFE\u0102\u0108\u010D" +
		"\u0111\u0116\u0125\u012A\u0130\u0138\u014B\u014F\u0155\u0159\u015F\u0163";
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
	public _inlineContent: InlineContentContext;
	public _content: InlineContentContext[] = [];
	public _inlineContentSeq: InlineContentSeqContext;
	public _extra: InlineContentSeqContext[] = [];
	public OpenInline(): TerminalNode { return this.getToken(KojiParser.OpenInline, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public Colon(): TerminalNode { return this.getToken(KojiParser.Colon, 0); }
	public CloseInline(): TerminalNode { return this.getToken(KojiParser.CloseInline, 0); }
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
	public inlineContent(): InlineContentContext[];
	public inlineContent(i: number): InlineContentContext;
	public inlineContent(i?: number): InlineContentContext | InlineContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentContext);
		} else {
			return this.getRuleContext(i, InlineContentContext);
		}
	}
	public inlineContentSeq(): InlineContentSeqContext[];
	public inlineContentSeq(i: number): InlineContentSeqContext;
	public inlineContentSeq(i?: number): InlineContentSeqContext | InlineContentSeqContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineContentSeqContext);
		} else {
			return this.getRuleContext(i, InlineContentSeqContext);
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


export class FuriganaContext extends ParserRuleContext {
	public _target: Token;
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
	public Kanji(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Kanji, 0); }
	public Kana(): TerminalNode | undefined { return this.tryGetToken(KojiParser.Kana, 0); }
	public NonJp(): TerminalNode | undefined { return this.tryGetToken(KojiParser.NonJp, 0); }
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
	public _content: TextSegmentContext;
	public AnnotationOpen(): TerminalNode { return this.getToken(KojiParser.AnnotationOpen, 0); }
	public AnnotationClose(): TerminalNode { return this.getToken(KojiParser.AnnotationClose, 0); }
	public textSegment(): TextSegmentContext {
		return this.getRuleContext(0, TextSegmentContext);
	}
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
	public Illegible(): TerminalNode { return this.getToken(KojiParser.Illegible, 0); }
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
	public BugHole(): TerminalNode { return this.getToken(KojiParser.BugHole, 0); }
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


