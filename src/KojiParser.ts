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
	public static readonly KaeritenMark = 23;
	public static readonly KaeritenChar = 24;
	public static readonly OkuriganaMark = 25;
	public static readonly Illegible = 26;
	public static readonly BugHole = 27;
	public static readonly NonJp = 28;
	public static readonly Kanji = 29;
	public static readonly Kana = 30;
	public static readonly NonJpChar = 31;
	public static readonly KanjiChar = 32;
	public static readonly Lb = 33;
	public static readonly WS = 34;
	public static readonly ElemName = 35;
	public static readonly Colon = 36;
	public static readonly HeaderLb = 37;
	public static readonly ID = 38;
	public static readonly Class = 39;
	public static readonly FuriganaContent = 40;
	public static readonly FuriganaSep = 41;
	public static readonly FuriganaClose = 42;
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
	public static readonly RULE_syntaxSugar = 17;
	public static readonly RULE_furigana = 18;
	public static readonly RULE_kaeriten = 19;
	public static readonly RULE_okurigana = 20;
	public static readonly RULE_annotation = 21;
	public static readonly RULE_illegible = 22;
	public static readonly RULE_bugHole = 23;
	public static readonly RULE_person = 24;
	public static readonly RULE_place = 25;
	public static readonly RULE_date = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"koji", "list", "inline", "inlineContentSeq", "inlineContent", "block", 
		"block1", "blockContent1", "block2", "blockContent2", "block3", "blockContent3", 
		"block4", "blockContent4", "block5", "blockContent5", "textSegment", "syntaxSugar", 
		"furigana", "kaeriten", "okurigana", "annotation", "illegible", "bugHole", 
		"person", "place", "date",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\uFF05'", "'\n\n'", "'\uFF05\uFF05'", "'\n\uFF05\n'", "'\uFF05\uFF05\uFF05'", 
		"'\n\uFF05\uFF05\n'", "'\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\n'", 
		"'\uFF05\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\uFF05\n'", 
		"'\u300A'", "'\u300B'", undefined, "'\uFF08'", "'\u3010'", "'\u3011'", 
		"'\uFF5B'", "'\uFF5D'", "'\u3014'", "'\u3015'", "'\uFF1C'", "'\uFF1E'", 
		"'\uFF3F'", undefined, "'\uFFE3'", "'\u25A0'", "'\u25A1'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'\uFF1A'", undefined, undefined, undefined, undefined, undefined, "'\uFF09'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "Bar", "FuriganaOpen", "AnnotationOpen", 
		"AnnotationClose", "PersonOpen", "PersonClose", "PlaceOpen", "PlaceClose", 
		"DateOpen", "DateClose", "KaeritenMark", "KaeritenChar", "OkuriganaMark", 
		"Illegible", "BugHole", "NonJp", "Kanji", "Kana", "NonJpChar", "KanjiChar", 
		"Lb", "WS", "ElemName", "Colon", "HeaderLb", "ID", "Class", "FuriganaContent", 
		"FuriganaSep", "FuriganaClose",
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
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenBlock1) | (1 << KojiParser.OpenBlock2) | (1 << KojiParser.OpenBlock3) | (1 << KojiParser.OpenBlock4) | (1 << KojiParser.OpenBlock5) | (1 << KojiParser.OpenInline) | (1 << KojiParser.AnnotationOpen) | (1 << KojiParser.PersonOpen) | (1 << KojiParser.PlaceOpen) | (1 << KojiParser.DateOpen) | (1 << KojiParser.KaeritenMark) | (1 << KojiParser.OkuriganaMark) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana))) !== 0) || _la === KojiParser.Lb) {
				{
				{
				this.state = 54;
				this.list();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
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
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.inline();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.syntaxSugar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.textSegment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
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
			this.state = 69;
			this.match(KojiParser.OpenInline);
			this.state = 70;
			this.match(KojiParser.ElemName);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 71;
				this.match(KojiParser.ID);
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 74;
				this.match(KojiParser.Class);
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(KojiParser.Colon);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0)) {
				{
				{
				this.state = 81;
				_localctx._inlineContent = this.inlineContent();
				_localctx._content.push(_localctx._inlineContent);
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Bar) {
				{
				{
				this.state = 87;
				this.match(KojiParser.Bar);
				this.state = 88;
				_localctx._inlineContentSeq = this.inlineContentSeq();
				_localctx._extra.push(_localctx._inlineContentSeq);
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
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
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (KojiParser.OpenInline - 11)) | (1 << (KojiParser.AnnotationOpen - 11)) | (1 << (KojiParser.PersonOpen - 11)) | (1 << (KojiParser.PlaceOpen - 11)) | (1 << (KojiParser.DateOpen - 11)) | (1 << (KojiParser.KaeritenMark - 11)) | (1 << (KojiParser.OkuriganaMark - 11)) | (1 << (KojiParser.Illegible - 11)) | (1 << (KojiParser.BugHole - 11)) | (1 << (KojiParser.NonJp - 11)) | (1 << (KojiParser.Kanji - 11)) | (1 << (KojiParser.Kana - 11)) | (1 << (KojiParser.Lb - 11)))) !== 0)) {
				{
				{
				this.state = 96;
				this.inlineContent();
				}
				}
				this.state = 101;
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
			this.state = 106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				this.syntaxSugar();
				}
				break;

			case 2:
				{
				this.state = 103;
				this.textSegment();
				}
				break;

			case 3:
				{
				this.state = 104;
				this.inline();
				}
				break;

			case 4:
				{
				this.state = 105;
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
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.OpenBlock1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.block1();
				}
				break;
			case KojiParser.OpenBlock2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.block2();
				}
				break;
			case KojiParser.OpenBlock3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.block3();
				}
				break;
			case KojiParser.OpenBlock4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 111;
				this.block4();
				}
				break;
			case KojiParser.OpenBlock5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 112;
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
			this.state = 115;
			this.match(KojiParser.OpenBlock1);
			this.state = 116;
			this.match(KojiParser.ElemName);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 117;
				this.match(KojiParser.ID);
				}
			}

			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 120;
				this.match(KojiParser.Class);
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.match(KojiParser.HeaderLb);
			this.state = 130;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 127;
					_localctx._blockContent1 = this.blockContent1();
					_localctx._content.push(_localctx._blockContent1);
					}
					}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock1) {
				{
				this.state = 133;
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
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 139;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 140;
				this.block2();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 141;
				this.block3();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 142;
				this.block4();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 143;
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
			this.state = 146;
			this.match(KojiParser.OpenBlock2);
			this.state = 147;
			this.match(KojiParser.ElemName);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 148;
				this.match(KojiParser.ID);
				}
			}

			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 151;
				this.match(KojiParser.Class);
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 157;
			this.match(KojiParser.HeaderLb);
			this.state = 161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 158;
					_localctx._blockContent2 = this.blockContent2();
					_localctx._content.push(_localctx._blockContent2);
					}
					}
				}
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock2) {
				{
				this.state = 164;
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
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 167;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 168;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 169;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 170;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 171;
				this.block3();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 172;
				this.block4();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 173;
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
			this.state = 176;
			this.match(KojiParser.OpenBlock3);
			this.state = 177;
			this.match(KojiParser.ElemName);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 178;
				this.match(KojiParser.ID);
				}
			}

			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 181;
				this.match(KojiParser.Class);
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 187;
			this.match(KojiParser.HeaderLb);
			this.state = 191;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 188;
					_localctx._blockContent3 = this.blockContent3();
					_localctx._content.push(_localctx._blockContent3);
					}
					}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock3) {
				{
				this.state = 194;
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
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 199;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 200;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 201;
				this.block4();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 202;
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
			this.state = 205;
			this.match(KojiParser.OpenBlock4);
			this.state = 206;
			this.match(KojiParser.ElemName);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 207;
				this.match(KojiParser.ID);
				}
			}

			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 210;
				this.match(KojiParser.Class);
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 216;
			this.match(KojiParser.HeaderLb);
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 217;
					_localctx._blockContent4 = this.blockContent4();
					_localctx._content.push(_localctx._blockContent4);
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock4) {
				{
				this.state = 223;
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
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 229;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 230;
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
			this.state = 233;
			this.match(KojiParser.OpenBlock5);
			this.state = 234;
			this.match(KojiParser.ElemName);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 235;
				this.match(KojiParser.ID);
				}
			}

			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 238;
				this.match(KojiParser.Class);
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this.match(KojiParser.HeaderLb);
			this.state = 248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 245;
					_localctx._blockContent5 = this.blockContent5();
					_localctx._content.push(_localctx._blockContent5);
					}
					}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock5) {
				{
				this.state = 251;
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
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 256;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 257;
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
			this.state = 261;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 260;
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
				this.state = 263;
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
	public syntaxSugar(): SyntaxSugarContext {
		let _localctx: SyntaxSugarContext = new SyntaxSugarContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KojiParser.RULE_syntaxSugar);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.NonJp:
			case KojiParser.Kanji:
			case KojiParser.Kana:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.furigana();
				}
				break;
			case KojiParser.KaeritenMark:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.kaeriten();
				}
				break;
			case KojiParser.OkuriganaMark:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 267;
				this.okurigana();
				}
				break;
			case KojiParser.AnnotationOpen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 268;
				this.annotation();
				}
				break;
			case KojiParser.Illegible:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 269;
				this.illegible();
				}
				break;
			case KojiParser.BugHole:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 270;
				this.bugHole();
				}
				break;
			case KojiParser.PersonOpen:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 271;
				this.person();
				}
				break;
			case KojiParser.PlaceOpen:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 272;
				this.place();
				}
				break;
			case KojiParser.DateOpen:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 273;
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
		this.enterRule(_localctx, 36, KojiParser.RULE_furigana);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.Kanji:
				{
				this.state = 276;
				_localctx._target = this.match(KojiParser.Kanji);
				}
				break;
			case KojiParser.Kana:
				{
				this.state = 277;
				_localctx._target = this.match(KojiParser.Kana);
				}
				break;
			case KojiParser.NonJp:
				{
				this.state = 278;
				_localctx._target = this.match(KojiParser.NonJp);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 281;
			this.match(KojiParser.FuriganaOpen);
			this.state = 282;
			_localctx._left = this.match(KojiParser.FuriganaContent);
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.FuriganaSep) {
				{
				this.state = 283;
				this.match(KojiParser.FuriganaSep);
				this.state = 284;
				_localctx._right = this.match(KojiParser.FuriganaContent);
				}
			}

			this.state = 287;
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
		this.enterRule(_localctx, 38, KojiParser.RULE_kaeriten);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(KojiParser.KaeritenMark);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 290;
				_localctx._content = this.match(KojiParser.KaeritenChar);
				}
				}
				this.state = 293;
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
		this.enterRule(_localctx, 40, KojiParser.RULE_okurigana);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(KojiParser.OkuriganaMark);
			this.state = 296;
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
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KojiParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(KojiParser.AnnotationOpen);
			this.state = 299;
			_localctx._content = this.textSegment();
			this.state = 300;
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
		this.enterRule(_localctx, 44, KojiParser.RULE_illegible);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 302;
					this.match(KojiParser.Illegible);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
		this.enterRule(_localctx, 46, KojiParser.RULE_bugHole);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 307;
					this.match(KojiParser.BugHole);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 310;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(_localctx, 48, KojiParser.RULE_person);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(KojiParser.PersonOpen);
			this.state = 313;
			this.inlineContent();
			this.state = 314;
			this.match(KojiParser.PersonClose);
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
		this.enterRule(_localctx, 50, KojiParser.RULE_place);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(KojiParser.PlaceOpen);
			this.state = 317;
			this.inlineContent();
			this.state = 318;
			this.match(KojiParser.PlaceClose);
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
		this.enterRule(_localctx, 52, KojiParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(KojiParser.DateOpen);
			this.state = 321;
			this.inlineContent();
			this.state = 322;
			this.match(KojiParser.DateClose);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\u0147\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03F\n\x03\x03\x04\x03\x04\x03\x04\x05\x04" +
		"K\n\x04\x03\x04\x07\x04N\n\x04\f\x04\x0E\x04Q\v\x04\x03\x04\x03\x04\x07" +
		"\x04U\n\x04\f\x04\x0E\x04X\v\x04\x03\x04\x03\x04\x07\x04\\\n\x04\f\x04" +
		"\x0E\x04_\v\x04\x03\x04\x03\x04\x03\x05\x07\x05d\n\x05\f\x05\x0E\x05g" +
		"\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06m\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\b\x03\b\x03\b\x05\by\n\b\x03" +
		"\b\x07\b|\n\b\f\b\x0E\b\x7F\v\b\x03\b\x03\b\x07\b\x83\n\b\f\b\x0E\b\x86" +
		"\v\b\x03\b\x05\b\x89\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\x93\n\t\x03\n\x03\n\x03\n\x05\n\x98\n\n\x03\n\x07\n\x9B\n\n\f" +
		"\n\x0E\n\x9E\v\n\x03\n\x03\n\x07\n\xA2\n\n\f\n\x0E\n\xA5\v\n\x03\n\x05" +
		"\n\xA8\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB1\n\v\x03" +
		"\f\x03\f\x03\f\x05\f\xB6\n\f\x03\f\x07\f\xB9\n\f\f\f\x0E\f\xBC\v\f\x03" +
		"\f\x03\f\x07\f\xC0\n\f\f\f\x0E\f\xC3\v\f\x03\f\x05\f\xC6\n\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCE\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xD3\n\x0E\x03\x0E\x07\x0E\xD6\n\x0E\f\x0E\x0E\x0E\xD9\v\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\xDD\n\x0E\f\x0E\x0E\x0E\xE0\v\x0E\x03\x0E\x05\x0E\xE3\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xEA\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\xEF\n\x10\x03\x10\x07\x10\xF2\n\x10\f\x10\x0E\x10" +
		"\xF5\v\x10\x03\x10\x03\x10\x07\x10\xF9\n\x10\f\x10\x0E\x10\xFC\v\x10\x03" +
		"\x10\x05\x10\xFF\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0105\n" +
		"\x11\x03\x12\x06\x12\u0108\n\x12\r\x12\x0E\x12\u0109\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0115\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u011A\n\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u0120\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x06\x15\u0126" +
		"\n\x15\r\x15\x0E\x15\u0127\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x06\x18\u0132\n\x18\r\x18\x0E\x18\u0133\x03\x19\x06" +
		"\x19\u0137\n\x19\r\x19\x0E\x19\u0138\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x02" +
		"\x02\x02\x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02\x03\x03\x02\x1E \x02" +
		"\u0178\x02;\x03\x02\x02\x02\x04E\x03\x02\x02\x02\x06G\x03\x02\x02\x02" +
		"\be\x03\x02\x02\x02\nl\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0Eu\x03\x02" +
		"\x02\x02\x10\x92\x03\x02\x02\x02\x12\x94\x03\x02\x02\x02\x14\xB0\x03\x02" +
		"\x02\x02\x16\xB2\x03\x02\x02\x02\x18\xCD\x03\x02\x02\x02\x1A\xCF\x03\x02" +
		"\x02\x02\x1C\xE9\x03\x02\x02\x02\x1E\xEB\x03\x02\x02\x02 \u0104\x03\x02" +
		"\x02\x02\"\u0107\x03\x02\x02\x02$\u0114\x03\x02\x02\x02&\u0119\x03\x02" +
		"\x02\x02(\u0123\x03\x02\x02\x02*\u0129\x03\x02\x02\x02,\u012C\x03\x02" +
		"\x02\x02.\u0131\x03\x02\x02\x020\u0136\x03\x02\x02\x022\u013A\x03\x02" +
		"\x02\x024\u013E\x03\x02\x02\x026\u0142\x03\x02\x02\x028:\x05\x04\x03\x02" +
		"98\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02" +
		"<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x02\x02\x03?\x03\x03\x02\x02" +
		"\x02@F\x05\f\x07\x02AF\x05\x06\x04\x02BF\x05$\x13\x02CF\x05\"\x12\x02" +
		"DF\x07#\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02EB\x03\x02\x02\x02" +
		"EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x05\x03\x02\x02\x02GH\x07\r\x02" +
		"\x02HJ\x07%\x02\x02IK\x07(\x02\x02JI\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KO\x03\x02\x02\x02LN\x07)\x02\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"RV\x07&\x02\x02SU\x05\n\x06\x02TS\x03\x02\x02\x02UX\x03\x02\x02\x02VT" +
		"\x03\x02\x02\x02VW\x03\x02\x02\x02W]\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"YZ\x07\x0F\x02\x02Z\\\x05\b\x05\x02[Y\x03\x02\x02\x02\\_\x03\x02\x02\x02" +
		"][\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"`a\x07\x0E\x02\x02a\x07\x03\x02\x02\x02bd\x05\n\x06\x02cb\x03\x02\x02" +
		"\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\t\x03\x02" +
		"\x02\x02ge\x03\x02\x02\x02hm\x05$\x13\x02im\x05\"\x12\x02jm\x05\x06\x04" +
		"\x02km\x07#\x02\x02lh\x03\x02\x02\x02li\x03\x02\x02\x02lj\x03\x02\x02" +
		"\x02lk\x03\x02\x02\x02m\v\x03\x02\x02\x02nt\x05\x0E\b\x02ot\x05\x12\n" +
		"\x02pt\x05\x16\f\x02qt\x05\x1A\x0E\x02rt\x05\x1E\x10\x02sn\x03\x02\x02" +
		"\x02so\x03\x02\x02\x02sp\x03\x02\x02\x02sq\x03\x02\x02\x02sr\x03\x02\x02" +
		"\x02t\r\x03\x02\x02\x02uv\x07\x03\x02\x02vx\x07%\x02\x02wy\x07(\x02\x02" +
		"xw\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x03\x02\x02\x02z|\x07)\x02\x02" +
		"{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x84\x07\'\x02\x02\x81" +
		"\x83\x05\x10\t\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84" +
		"\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86" +
		"\x84\x03\x02\x02\x02\x87\x89\x07\x04\x02\x02\x88\x87\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x0F\x03\x02\x02\x02\x8A\x93\x05$\x13\x02\x8B" +
		"\x93\x05\"\x12\x02\x8C\x93\x05\x06\x04\x02\x8D\x93\x07#\x02\x02\x8E\x93" +
		"\x05\x12\n\x02\x8F\x93\x05\x16\f\x02\x90\x93\x05\x1A\x0E\x02\x91\x93\x05" +
		"\x1E\x10\x02\x92\x8A\x03\x02\x02\x02\x92\x8B\x03\x02\x02\x02\x92\x8C\x03" +
		"\x02\x02\x02\x92\x8D\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x92\x8F\x03" +
		"\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\x11\x03" +
		"\x02\x02\x02\x94\x95\x07\x05\x02\x02\x95\x97\x07%\x02\x02\x96\x98\x07" +
		"(\x02\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9C\x03" +
		"\x02\x02\x02\x99\x9B\x07)\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\x9E\x03" +
		"\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03" +
		"\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA3\x07\'\x02\x02\xA0\xA2\x05" +
		"\x14\v\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA6\xA8\x07\x06\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03" +
		"\x02\x02\x02\xA8\x13\x03\x02\x02\x02\xA9\xB1\x05$\x13\x02\xAA\xB1\x05" +
		"\"\x12\x02\xAB\xB1\x05\x06\x04\x02\xAC\xB1\x07#\x02\x02\xAD\xB1\x05\x16" +
		"\f\x02\xAE\xB1\x05\x1A\x0E\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xA9\x03\x02" +
		"\x02\x02\xB0\xAA\x03\x02\x02\x02\xB0\xAB\x03\x02\x02\x02\xB0\xAC\x03\x02" +
		"\x02\x02\xB0\xAD\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xAF\x03\x02" +
		"\x02\x02\xB1\x15\x03\x02\x02\x02\xB2\xB3\x07\x07\x02\x02\xB3\xB5\x07%" +
		"\x02\x02\xB4\xB6\x07(\x02\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02" +
		"\x02\x02\xB6\xBA\x03\x02\x02\x02\xB7\xB9\x07)\x02\x02\xB8\xB7\x03\x02" +
		"\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC1\x07\'" +
		"\x02\x02\xBE\xC0\x05\x18\r\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC3\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC5\x03\x02" +
		"\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x07\b\x02\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\x17\x03\x02\x02\x02\xC7\xCE\x05$" +
		"\x13\x02\xC8\xCE\x05\"\x12\x02\xC9\xCE\x05\x06\x04\x02\xCA\xCE\x07#\x02" +
		"\x02\xCB\xCE\x05\x1A\x0E\x02\xCC\xCE\x05\x1E\x10\x02\xCD\xC7\x03\x02\x02" +
		"\x02\xCD\xC8\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCD\xCA\x03\x02\x02" +
		"\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\x19\x03\x02\x02" +
		"\x02\xCF\xD0\x07\t\x02\x02\xD0\xD2\x07%\x02\x02\xD1\xD3\x07(\x02\x02\xD2" +
		"\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD7\x03\x02\x02\x02\xD4" +
		"\xD6\x07)\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xDA\xDE\x07\'\x02\x02\xDB\xDD\x05\x1C\x0F\x02\xDC" +
		"\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1" +
		"\xE3\x07\n\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\x1B\x03\x02\x02\x02\xE4\xEA\x05$\x13\x02\xE5\xEA\x05\"\x12\x02\xE6\xEA" +
		"\x05\x06\x04\x02\xE7\xEA\x07#\x02\x02\xE8\xEA\x05\x1E\x10\x02\xE9\xE4" +
		"\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xE9\xE6\x03\x02\x02\x02\xE9\xE7" +
		"\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\x1D\x03\x02\x02\x02\xEB\xEC" +
		"\x07\v\x02\x02\xEC\xEE\x07%\x02\x02\xED\xEF\x07(\x02\x02\xEE\xED\x03\x02" +
		"\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF3\x03\x02\x02\x02\xF0\xF2\x07)" +
		"\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5\xF3\x03\x02" +
		"\x02\x02\xF6\xFA\x07\'\x02\x02\xF7\xF9\x05 \x11\x02\xF8\xF7\x03\x02\x02" +
		"\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02" +
		"\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFF\x07\f\x02" +
		"\x02\xFE\xFD\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\x1F\x03\x02\x02" +
		"\x02\u0100\u0105\x05$\x13\x02\u0101\u0105\x05\"\x12\x02\u0102\u0105\x05" +
		"\x06\x04\x02\u0103\u0105\x07#\x02\x02\u0104\u0100\x03\x02\x02\x02\u0104" +
		"\u0101\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02" +
		"\x02\x02\u0105!\x03\x02\x02\x02\u0106\u0108\t\x02\x02\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A#\x03\x02\x02\x02\u010B\u0115\x05&\x14" +
		"\x02\u010C\u0115\x05(\x15\x02\u010D\u0115\x05*\x16\x02\u010E\u0115\x05" +
		",\x17\x02\u010F\u0115\x05.\x18\x02\u0110\u0115\x050\x19\x02\u0111\u0115" +
		"\x052\x1A\x02\u0112\u0115\x054\x1B\x02\u0113\u0115\x056\x1C\x02\u0114" +
		"\u010B\x03\x02\x02\x02\u0114\u010C\x03\x02\x02\x02\u0114\u010D\x03\x02" +
		"\x02\x02\u0114\u010E\x03\x02\x02\x02\u0114\u010F\x03\x02\x02\x02\u0114" +
		"\u0110\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0114\u0112\x03\x02" +
		"\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115%\x03\x02\x02\x02\u0116\u011A" +
		"\x07\x1F\x02\x02\u0117\u011A\x07 \x02\x02\u0118\u011A\x07\x1E\x02\x02" +
		"\u0119\u0116\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u0118\x03" +
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07\x10\x02\x02\u011C" +
		"\u011F\x07*\x02\x02\u011D\u011E\x07+\x02\x02\u011E\u0120\x07*\x02\x02" +
		"\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03" +
		"\x02\x02\x02\u0121\u0122\x07,\x02\x02\u0122\'\x03\x02\x02\x02\u0123\u0125" +
		"\x07\x19\x02\x02\u0124\u0126\x07\x1A\x02\x02\u0125\u0124\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128)\x03\x02\x02\x02\u0129\u012A\x07\x1B\x02\x02\u012A" +
		"\u012B\x07 \x02\x02\u012B+\x03\x02\x02\x02\u012C\u012D\x07\x11\x02\x02" +
		"\u012D\u012E\x05\"\x12\x02\u012E\u012F\x07\x12\x02\x02\u012F-\x03\x02" +
		"\x02\x02\u0130\u0132\x07\x1C\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134/\x03\x02\x02\x02\u0135\u0137\x07\x1D\x02\x02\u0136\u0135" +
		"\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u01391\x03\x02\x02\x02\u013A\u013B\x07\x13" +
		"\x02\x02\u013B\u013C\x05\n\x06\x02\u013C\u013D\x07\x14\x02\x02\u013D3" +
		"\x03\x02\x02\x02\u013E\u013F\x07\x15\x02\x02\u013F\u0140\x05\n\x06\x02" +
		"\u0140\u0141\x07\x16\x02\x02\u01415\x03\x02\x02\x02\u0142\u0143\x07\x17" +
		"\x02\x02\u0143\u0144\x05\n\x06\x02\u0144\u0145\x07\x18\x02\x02\u01457" +
		"\x03\x02\x02\x02+;EJOV]elsx}\x84\x88\x92\x97\x9C\xA3\xA7\xB0\xB5\xBA\xC1" +
		"\xC5\xCD\xD2\xD7\xDE\xE2\xE9\xEE\xF3\xFA\xFE\u0104\u0109\u0114\u0119\u011F" +
		"\u0127\u0133\u0138";
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
	public _left: Token;
	public _right: Token;
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
	public Illegible(): TerminalNode[];
	public Illegible(i: number): TerminalNode;
	public Illegible(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.Illegible);
		} else {
			return this.getToken(KojiParser.Illegible, i);
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
	public BugHole(): TerminalNode[];
	public BugHole(i: number): TerminalNode;
	public BugHole(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KojiParser.BugHole);
		} else {
			return this.getToken(KojiParser.BugHole, i);
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
	public PersonOpen(): TerminalNode { return this.getToken(KojiParser.PersonOpen, 0); }
	public inlineContent(): InlineContentContext {
		return this.getRuleContext(0, InlineContentContext);
	}
	public PersonClose(): TerminalNode { return this.getToken(KojiParser.PersonClose, 0); }
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
	public PlaceOpen(): TerminalNode { return this.getToken(KojiParser.PlaceOpen, 0); }
	public inlineContent(): InlineContentContext {
		return this.getRuleContext(0, InlineContentContext);
	}
	public PlaceClose(): TerminalNode { return this.getToken(KojiParser.PlaceClose, 0); }
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
	public DateOpen(): TerminalNode { return this.getToken(KojiParser.DateOpen, 0); }
	public inlineContent(): InlineContentContext {
		return this.getRuleContext(0, InlineContentContext);
	}
	public DateClose(): TerminalNode { return this.getToken(KojiParser.DateClose, 0); }
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


