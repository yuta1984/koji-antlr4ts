// Generated from KojiParser.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly OpenInline2 = 13;
	public static readonly CloseInline2 = 14;
	public static readonly Bar = 15;
	public static readonly FuriganaParen = 16;
	public static readonly AnnotationParen = 17;
	public static readonly Kaeriten = 18;
	public static readonly Okurigana = 19;
	public static readonly Illegible = 20;
	public static readonly BugHole = 21;
	public static readonly NonJp = 22;
	public static readonly Kanji = 23;
	public static readonly Kana = 24;
	public static readonly NonJpChar = 25;
	public static readonly KanjiChar = 26;
	public static readonly Lb = 27;
	public static readonly WS = 28;
	public static readonly ElemName = 29;
	public static readonly Colon = 30;
	public static readonly HeaderLb = 31;
	public static readonly ID = 32;
	public static readonly Class = 33;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"koji", "list", "inline", "inlineContentSeq", "inlineContent", "block", 
		"block1", "blockContent1", "block2", "blockContent2", "block3", "blockContent3", 
		"block4", "blockContent4", "block5", "blockContent5", "textSegment", "syntaxSugar", 
		"furigana", "kaeriten", "okurigana", "annotation", "illegible", "bugHole",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\uFF05'", "'\n\n'", "'\uFF05\uFF05'", "'\n\uFF05\n'", "'\uFF05\uFF05\uFF05'", 
		"'\n\uFF05\uFF05\n'", "'\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\n'", 
		"'\uFF05\uFF05\uFF05\uFF05\uFF05'", "'\n\uFF05\uFF05\uFF05\uFF05\n'", 
		"'\uFF1C'", "'\uFF1E'", "'\u300A'", "'\u300B'", "'\uFF5C'", undefined, 
		undefined, undefined, undefined, "'\u25A0'", "'\u25A1'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'\uFF1A'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "OpenInline2", "CloseInline2", "Bar", "FuriganaParen", 
		"AnnotationParen", "Kaeriten", "Okurigana", "Illegible", "BugHole", "NonJp", 
		"Kanji", "Kana", "NonJpChar", "KanjiChar", "Lb", "WS", "ElemName", "Colon", 
		"HeaderLb", "ID", "Class",
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
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenBlock1) | (1 << KojiParser.OpenBlock2) | (1 << KojiParser.OpenBlock3) | (1 << KojiParser.OpenBlock4) | (1 << KojiParser.OpenBlock5) | (1 << KojiParser.OpenInline) | (1 << KojiParser.OpenInline2) | (1 << KojiParser.AnnotationParen) | (1 << KojiParser.Kaeriten) | (1 << KojiParser.Okurigana) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana) | (1 << KojiParser.Lb))) !== 0)) {
				{
				{
				this.state = 48;
				this.list();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
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
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.inline();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.syntaxSugar();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 59;
				this.textSegment();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 60;
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
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.OpenInline:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.match(KojiParser.OpenInline);
				this.state = 64;
				this.match(KojiParser.ElemName);
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KojiParser.ID) {
					{
					this.state = 65;
					this.match(KojiParser.ID);
					}
				}

				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KojiParser.Class) {
					{
					{
					this.state = 68;
					this.match(KojiParser.Class);
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 74;
				this.match(KojiParser.Colon);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenInline) | (1 << KojiParser.OpenInline2) | (1 << KojiParser.AnnotationParen) | (1 << KojiParser.Kaeriten) | (1 << KojiParser.Okurigana) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana) | (1 << KojiParser.Lb))) !== 0)) {
					{
					{
					this.state = 75;
					_localctx._inlineContent = this.inlineContent();
					_localctx._content.push(_localctx._inlineContent);
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KojiParser.Bar) {
					{
					{
					this.state = 81;
					this.match(KojiParser.Bar);
					this.state = 82;
					_localctx._inlineContentSeq = this.inlineContentSeq();
					_localctx._extra.push(_localctx._inlineContentSeq);
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 88;
				this.match(KojiParser.CloseInline);
				}
				break;
			case KojiParser.OpenInline2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(KojiParser.OpenInline2);
				this.state = 90;
				this.match(KojiParser.ElemName);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KojiParser.ID) {
					{
					this.state = 91;
					this.match(KojiParser.ID);
					}
				}

				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KojiParser.Class) {
					{
					{
					this.state = 94;
					this.match(KojiParser.Class);
					}
					}
					this.state = 99;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 100;
				this.match(KojiParser.Colon);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenInline) | (1 << KojiParser.OpenInline2) | (1 << KojiParser.AnnotationParen) | (1 << KojiParser.Kaeriten) | (1 << KojiParser.Okurigana) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana) | (1 << KojiParser.Lb))) !== 0)) {
					{
					{
					this.state = 101;
					_localctx._inlineContent = this.inlineContent();
					_localctx._content.push(_localctx._inlineContent);
					}
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KojiParser.Bar) {
					{
					{
					this.state = 107;
					this.match(KojiParser.Bar);
					this.state = 108;
					_localctx._inlineContentSeq = this.inlineContentSeq();
					_localctx._extra.push(_localctx._inlineContentSeq);
					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 114;
				this.match(KojiParser.CloseInline2);
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
	public inlineContentSeq(): InlineContentSeqContext {
		let _localctx: InlineContentSeqContext = new InlineContentSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KojiParser.RULE_inlineContentSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KojiParser.OpenInline) | (1 << KojiParser.OpenInline2) | (1 << KojiParser.AnnotationParen) | (1 << KojiParser.Kaeriten) | (1 << KojiParser.Okurigana) | (1 << KojiParser.Illegible) | (1 << KojiParser.BugHole) | (1 << KojiParser.NonJp) | (1 << KojiParser.Kanji) | (1 << KojiParser.Kana) | (1 << KojiParser.Lb))) !== 0)) {
				{
				{
				this.state = 117;
				this.inlineContent();
				}
				}
				this.state = 122;
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
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 123;
				this.syntaxSugar();
				}
				break;

			case 2:
				{
				this.state = 124;
				this.textSegment();
				}
				break;

			case 3:
				{
				this.state = 125;
				this.inline();
				}
				break;

			case 4:
				{
				this.state = 126;
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
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.OpenBlock1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.block1();
				}
				break;
			case KojiParser.OpenBlock2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.block2();
				}
				break;
			case KojiParser.OpenBlock3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 131;
				this.block3();
				}
				break;
			case KojiParser.OpenBlock4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 132;
				this.block4();
				}
				break;
			case KojiParser.OpenBlock5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 133;
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
			this.state = 136;
			this.match(KojiParser.OpenBlock1);
			this.state = 137;
			this.match(KojiParser.ElemName);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 138;
				this.match(KojiParser.ID);
				}
			}

			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 141;
				this.match(KojiParser.Class);
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
			this.match(KojiParser.HeaderLb);
			this.state = 151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 148;
					_localctx._blockContent1 = this.blockContent1();
					_localctx._content.push(_localctx._blockContent1);
					}
					}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock1) {
				{
				this.state = 154;
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
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 160;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 161;
				this.block2();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 162;
				this.block3();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 163;
				this.block4();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 164;
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
			this.state = 167;
			this.match(KojiParser.OpenBlock2);
			this.state = 168;
			this.match(KojiParser.ElemName);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 169;
				this.match(KojiParser.ID);
				}
			}

			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 172;
				this.match(KojiParser.Class);
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(KojiParser.HeaderLb);
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					_localctx._blockContent2 = this.blockContent2();
					_localctx._content.push(_localctx._blockContent2);
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock2) {
				{
				this.state = 185;
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
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 190;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 191;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 192;
				this.block3();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 193;
				this.block4();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 194;
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
			this.state = 197;
			this.match(KojiParser.OpenBlock3);
			this.state = 198;
			this.match(KojiParser.ElemName);
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 199;
				this.match(KojiParser.ID);
				}
			}

			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 202;
				this.match(KojiParser.Class);
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.match(KojiParser.HeaderLb);
			this.state = 212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 209;
					_localctx._blockContent3 = this.blockContent3();
					_localctx._content.push(_localctx._blockContent3);
					}
					}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock3) {
				{
				this.state = 215;
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
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 220;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 221;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 222;
				this.block4();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 223;
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
			this.state = 226;
			this.match(KojiParser.OpenBlock4);
			this.state = 227;
			this.match(KojiParser.ElemName);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 228;
				this.match(KojiParser.ID);
				}
			}

			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 231;
				this.match(KojiParser.Class);
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(KojiParser.HeaderLb);
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 238;
					_localctx._blockContent4 = this.blockContent4();
					_localctx._content.push(_localctx._blockContent4);
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock4) {
				{
				this.state = 244;
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
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 249;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 250;
				this.match(KojiParser.Lb);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 251;
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
			this.state = 254;
			this.match(KojiParser.OpenBlock5);
			this.state = 255;
			this.match(KojiParser.ElemName);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.ID) {
				{
				this.state = 256;
				this.match(KojiParser.ID);
				}
			}

			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KojiParser.Class) {
				{
				{
				this.state = 259;
				this.match(KojiParser.Class);
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this.match(KojiParser.HeaderLb);
			this.state = 269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 266;
					_localctx._blockContent5 = this.blockContent5();
					_localctx._content.push(_localctx._blockContent5);
					}
					}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KojiParser.CloseBlock5) {
				{
				this.state = 272;
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
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.syntaxSugar();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.textSegment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.inline();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
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
			this.state = 282;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 281;
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
				this.state = 284;
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
	public syntaxSugar(): SyntaxSugarContext {
		let _localctx: SyntaxSugarContext = new SyntaxSugarContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KojiParser.RULE_syntaxSugar);
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.NonJp:
			case KojiParser.Kanji:
			case KojiParser.Kana:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.furigana();
				}
				break;
			case KojiParser.Kaeriten:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.kaeriten();
				}
				break;
			case KojiParser.Okurigana:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 288;
				this.okurigana();
				}
				break;
			case KojiParser.AnnotationParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 289;
				this.annotation();
				}
				break;
			case KojiParser.Illegible:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 290;
				this.illegible();
				}
				break;
			case KojiParser.BugHole:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 291;
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
		this.enterRule(_localctx, 36, KojiParser.RULE_furigana);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KojiParser.Kanji:
				{
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 294;
					_localctx._target = this.match(KojiParser.Kanji);
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KojiParser.Kanji);
				}
				break;
			case KojiParser.Kana:
				{
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 299;
					_localctx._target = this.match(KojiParser.Kana);
					}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KojiParser.Kana);
				}
				break;
			case KojiParser.NonJp:
				{
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 304;
					_localctx._target = this.match(KojiParser.NonJp);
					}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KojiParser.NonJp);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 311;
			this.match(KojiParser.FuriganaParen);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(KojiParser.Kaeriten);
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
			this.state = 315;
			this.match(KojiParser.Okurigana);
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
			this.state = 317;
			this.match(KojiParser.AnnotationParen);
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
			this.state = 320;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 319;
					this.match(KojiParser.Illegible);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
			this.state = 325;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 324;
					this.match(KojiParser.BugHole);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\u014C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03@\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x05\x04E\n\x04\x03\x04\x07\x04H\n\x04\f\x04\x0E\x04" +
		"K\v\x04\x03\x04\x03\x04\x07\x04O\n\x04\f\x04\x0E\x04R\v\x04\x03\x04\x03" +
		"\x04\x07\x04V\n\x04\f\x04\x0E\x04Y\v\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04_\n\x04\x03\x04\x07\x04b\n\x04\f\x04\x0E\x04e\v\x04\x03\x04\x03" +
		"\x04\x07\x04i\n\x04\f\x04\x0E\x04l\v\x04\x03\x04\x03\x04\x07\x04p\n\x04" +
		"\f\x04\x0E\x04s\v\x04\x03\x04\x05\x04v\n\x04\x03\x05\x07\x05y\n\x05\f" +
		"\x05\x0E\x05|\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x82\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x89\n\x07\x03\b\x03\b" +
		"\x03\b\x05\b\x8E\n\b\x03\b\x07\b\x91\n\b\f\b\x0E\b\x94\v\b\x03\b\x03\b" +
		"\x07\b\x98\n\b\f\b\x0E\b\x9B\v\b\x03\b\x05\b\x9E\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xA8\n\t\x03\n\x03\n\x03\n\x05\n\xAD" +
		"\n\n\x03\n\x07\n\xB0\n\n\f\n\x0E\n\xB3\v\n\x03\n\x03\n\x07\n\xB7\n\n\f" +
		"\n\x0E\n\xBA\v\n\x03\n\x05\n\xBD\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\xC6\n\v\x03\f\x03\f\x03\f\x05\f\xCB\n\f\x03\f\x07\f\xCE" +
		"\n\f\f\f\x0E\f\xD1\v\f\x03\f\x03\f\x07\f\xD5\n\f\f\f\x0E\f\xD8\v\f\x03" +
		"\f\x05\f\xDB\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE3\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xE8\n\x0E\x03\x0E\x07\x0E\xEB\n\x0E\f\x0E" +
		"\x0E\x0E\xEE\v\x0E\x03\x0E\x03\x0E\x07\x0E\xF2\n\x0E\f\x0E\x0E\x0E\xF5" +
		"\v\x0E\x03\x0E\x05\x0E\xF8\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xFF\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0104\n\x10\x03\x10" +
		"\x07\x10\u0107\n\x10\f\x10\x0E\x10\u010A\v\x10\x03\x10\x03\x10\x07\x10" +
		"\u010E\n\x10\f\x10\x0E\x10\u0111\v\x10\x03\x10\x05\x10\u0114\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u011A\n\x11\x03\x12\x06\x12\u011D" +
		"\n\x12\r\x12\x0E\x12\u011E\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0127\n\x13\x03\x14\x06\x14\u012A\n\x14\r\x14\x0E\x14\u012B" +
		"\x03\x14\x06\x14\u012F\n\x14\r\x14\x0E\x14\u0130\x03\x14\x06\x14\u0134" +
		"\n\x14\r\x14\x0E\x14\u0135\x05\x14\u0138\n\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x06\x18\u0143\n\x18\r" +
		"\x18\x0E\x18\u0144\x03\x19\x06\x19\u0148\n\x19\r\x19\x0E\x19\u0149\x03" +
		"\x19\x02\x02\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\x03\x03\x02\x18\x1A\x02" +
		"\u0183\x025\x03\x02\x02\x02\x04?\x03\x02\x02\x02\x06u\x03\x02\x02\x02" +
		"\bz\x03\x02\x02\x02\n\x81\x03\x02\x02\x02\f\x88\x03\x02\x02\x02\x0E\x8A" +
		"\x03\x02\x02\x02\x10\xA7\x03\x02\x02\x02\x12\xA9\x03\x02\x02\x02\x14\xC5" +
		"\x03\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18\xE2\x03\x02\x02\x02\x1A\xE4" +
		"\x03\x02\x02\x02\x1C\xFE\x03\x02\x02\x02\x1E\u0100\x03\x02\x02\x02 \u0119" +
		"\x03\x02\x02\x02\"\u011C\x03\x02\x02\x02$\u0126\x03\x02\x02\x02&\u0137" +
		"\x03\x02\x02\x02(\u013B\x03\x02\x02\x02*\u013D\x03\x02\x02\x02,\u013F" +
		"\x03\x02\x02\x02.\u0142\x03\x02\x02\x020\u0147\x03\x02\x02\x0224\x05\x04" +
		"\x03\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02" +
		"\x02\x0268\x03\x02\x02\x0275\x03\x02\x02\x0289\x07\x02\x02\x039\x03\x03" +
		"\x02\x02\x02:@\x05\f\x07\x02;@\x05\x06\x04\x02<@\x05$\x13\x02=@\x05\"" +
		"\x12\x02>@\x07\x1D\x02\x02?:\x03\x02\x02\x02?;\x03\x02\x02\x02?<\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x05\x03\x02\x02\x02AB\x07" +
		"\r\x02\x02BD\x07\x1F\x02\x02CE\x07\"\x02\x02DC\x03\x02\x02\x02DE\x03\x02" +
		"\x02\x02EI\x03\x02\x02\x02FH\x07#\x02\x02GF\x03\x02\x02\x02HK\x03\x02" +
		"\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02" +
		"\x02\x02LP\x07 \x02\x02MO\x05\n\x06\x02NM\x03\x02\x02\x02OR\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QW\x03\x02\x02\x02RP\x03\x02\x02" +
		"\x02ST\x07\x11\x02\x02TV\x05\b\x05\x02US\x03\x02\x02\x02VY\x03\x02\x02" +
		"\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02" +
		"\x02Zv\x07\x0E\x02\x02[\\\x07\x0F\x02\x02\\^\x07\x1F\x02\x02]_\x07\"\x02" +
		"\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02_c\x03\x02\x02\x02`b\x07#\x02" +
		"\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02" +
		"\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02fj\x07 \x02\x02gi\x05\n\x06\x02" +
		"hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"kq\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07\x11\x02\x02np\x05\b\x05\x02" +
		"om\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02" +
		"rt\x03\x02\x02\x02sq\x03\x02\x02\x02tv\x07\x10\x02\x02uA\x03\x02\x02\x02" +
		"u[\x03\x02\x02\x02v\x07\x03\x02\x02\x02wy\x05\n\x06\x02xw\x03\x02\x02" +
		"\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\t\x03\x02" +
		"\x02\x02|z\x03\x02\x02\x02}\x82\x05$\x13\x02~\x82\x05\"\x12\x02\x7F\x82" +
		"\x05\x06\x04\x02\x80\x82\x07\x1D\x02\x02\x81}\x03\x02\x02\x02\x81~\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\v\x03" +
		"\x02\x02\x02\x83\x89\x05\x0E\b\x02\x84\x89\x05\x12\n\x02\x85\x89\x05\x16" +
		"\f\x02\x86\x89\x05\x1A\x0E\x02\x87\x89\x05\x1E\x10\x02\x88\x83\x03\x02" +
		"\x02\x02\x88\x84\x03\x02\x02\x02\x88\x85\x03\x02\x02\x02\x88\x86\x03\x02" +
		"\x02\x02\x88\x87\x03\x02\x02\x02\x89\r\x03\x02\x02\x02\x8A\x8B\x07\x03" +
		"\x02\x02\x8B\x8D\x07\x1F\x02\x02\x8C\x8E\x07\"\x02\x02\x8D\x8C\x03\x02" +
		"\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x92\x03\x02\x02\x02\x8F\x91\x07#" +
		"\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02" +
		"\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94\x92\x03\x02" +
		"\x02\x02\x95\x99\x07!\x02\x02\x96\x98\x05\x10\t\x02\x97\x96\x03\x02\x02" +
		"\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9E\x07\x04\x02" +
		"\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x0F\x03\x02\x02" +
		"\x02\x9F\xA8\x05$\x13\x02\xA0\xA8\x05\"\x12\x02\xA1\xA8\x05\x06\x04\x02" +
		"\xA2\xA8\x07\x1D\x02\x02\xA3\xA8\x05\x12\n\x02\xA4\xA8\x05\x16\f\x02\xA5" +
		"\xA8\x05\x1A\x0E\x02\xA6\xA8\x05\x1E\x10\x02\xA7\x9F\x03\x02\x02\x02\xA7" +
		"\xA0\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7" +
		"\xA3\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7" +
		"\xA6\x03\x02\x02\x02\xA8\x11\x03\x02\x02\x02\xA9\xAA\x07\x05\x02\x02\xAA" +
		"\xAC\x07\x1F\x02\x02\xAB\xAD\x07\"\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC" +
		"\xAD\x03\x02\x02\x02\xAD\xB1\x03\x02\x02\x02\xAE\xB0\x07#\x02\x02\xAF" +
		"\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1" +
		"\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4" +
		"\xB8\x07!\x02\x02\xB5\xB7\x05\x14\v\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA" +
		"\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBC" +
		"\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\x07\x06\x02\x02\xBC\xBB" +
		"\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\x13\x03\x02\x02\x02\xBE\xC6" +
		"\x05$\x13\x02\xBF\xC6\x05\"\x12\x02\xC0\xC6\x05\x06\x04\x02\xC1\xC6\x07" +
		"\x1D\x02\x02\xC2\xC6\x05\x16\f\x02\xC3\xC6\x05\x1A\x0E\x02\xC4\xC6\x05" +
		"\x1E\x10\x02\xC5\xBE\x03\x02\x02\x02\xC5\xBF\x03\x02\x02\x02\xC5\xC0\x03" +
		"\x02\x02\x02\xC5\xC1\x03\x02\x02\x02\xC5\xC2\x03\x02\x02\x02\xC5\xC3\x03" +
		"\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\x15\x03\x02\x02\x02\xC7\xC8\x07" +
		"\x07\x02\x02\xC8\xCA\x07\x1F\x02\x02\xC9\xCB\x07\"\x02\x02\xCA\xC9\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCF\x03\x02\x02\x02\xCC\xCE\x07" +
		"#\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03" +
		"\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03" +
		"\x02\x02\x02\xD2\xD6\x07!\x02\x02\xD3\xD5\x05\x18\r\x02\xD4\xD3\x03\x02" +
		"\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02" +
		"\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDB\x07\b" +
		"\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x17\x03\x02" +
		"\x02\x02\xDC\xE3\x05$\x13\x02\xDD\xE3\x05\"\x12\x02\xDE\xE3\x05\x06\x04" +
		"\x02\xDF\xE3\x07\x1D\x02\x02\xE0\xE3\x05\x1A\x0E\x02\xE1\xE3\x05\x1E\x10" +
		"\x02\xE2\xDC\x03\x02\x02\x02\xE2\xDD\x03\x02\x02\x02\xE2\xDE\x03\x02\x02" +
		"\x02\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02" +
		"\x02\xE3\x19\x03\x02\x02\x02\xE4\xE5\x07\t\x02\x02\xE5\xE7\x07\x1F\x02" +
		"\x02\xE6\xE8\x07\"\x02\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\xEC\x03\x02\x02\x02\xE9\xEB\x07#\x02\x02\xEA\xE9\x03\x02\x02" +
		"\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
		"\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF3\x07!\x02" +
		"\x02\xF0\xF2\x05\x1C\x0F\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02" +
		"\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03\x02\x02" +
		"\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF8\x07\n\x02\x02\xF7\xF6\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\x1B\x03\x02\x02\x02\xF9\xFF\x05$\x13" +
		"\x02\xFA\xFF\x05\"\x12\x02\xFB\xFF\x05\x06\x04\x02\xFC\xFF\x07\x1D\x02" +
		"\x02\xFD\xFF\x05\x1E\x10\x02\xFE\xF9\x03\x02\x02\x02\xFE\xFA\x03\x02\x02" +
		"\x02\xFE\xFB\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02" +
		"\x02\xFF\x1D\x03\x02\x02\x02\u0100\u0101\x07\v\x02\x02\u0101\u0103\x07" +
		"\x1F\x02\x02\u0102\u0104\x07\"\x02\x02\u0103\u0102\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\u0108\x03\x02\x02\x02\u0105\u0107\x07#\x02" +
		"\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x03\x02\x02\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010B\u010F\x07!\x02\x02\u010C\u010E\x05" +
		" \x11\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0113\x03\x02" +
		"\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0114\x07\f\x02\x02\u0113\u0112" +
		"\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\x1F\x03\x02\x02\x02" +
		"\u0115\u011A\x05$\x13\x02\u0116\u011A\x05\"\x12\x02\u0117\u011A\x05\x06" +
		"\x04\x02\u0118\u011A\x07\x1D\x02\x02\u0119\u0115\x03\x02\x02\x02\u0119" +
		"\u0116\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u0118\x03\x02" +
		"\x02\x02\u011A!\x03\x02\x02\x02\u011B\u011D\t\x02\x02\x02\u011C\u011B" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02" +
		"\u011E\u011F\x03\x02\x02\x02\u011F#\x03\x02\x02\x02\u0120\u0127\x05&\x14" +
		"\x02\u0121\u0127\x05(\x15\x02\u0122\u0127\x05*\x16\x02\u0123\u0127\x05" +
		",\x17\x02\u0124\u0127\x05.\x18\x02\u0125\u0127\x050\x19\x02\u0126\u0120" +
		"\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126\u0122\x03\x02\x02\x02" +
		"\u0126\u0123\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0125\x03" +
		"\x02\x02\x02\u0127%\x03\x02\x02\x02\u0128\u012A\x07\x19\x02\x02\u0129" +
		"\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02" +
		"\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u0138\x03\x02\x02\x02\u012D" +
		"\u012F\x07\x1A\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02" +
		"\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0138\x03\x02\x02\x02\u0132\u0134\x07\x18\x02\x02\u0133\u0132\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0129\x03\x02" +
		"\x02\x02\u0137\u012E\x03\x02\x02\x02\u0137\u0133\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u013A\x07\x12\x02\x02\u013A\'\x03\x02\x02" +
		"\x02\u013B\u013C\x07\x14\x02\x02\u013C)\x03\x02\x02\x02\u013D\u013E\x07" +
		"\x15\x02\x02\u013E+\x03\x02\x02\x02\u013F\u0140\x07\x13\x02\x02\u0140" +
		"-\x03\x02\x02\x02\u0141\u0143\x07\x16\x02\x02\u0142\u0141\x03\x02\x02" +
		"\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145" +
		"\x03\x02\x02\x02\u0145/\x03\x02\x02\x02\u0146\u0148\x07\x17\x02\x02\u0147" +
		"\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02" +
		"\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A1\x03\x02\x02\x0215?DIPW^cj" +
		"quz\x81\x88\x8D\x92\x99\x9D\xA7\xAC\xB1\xB8\xBC\xC5\xCA\xCF\xD6\xDA\xE2" +
		"\xE7\xEC\xF3\xF7\xFE\u0103\u0108\u010F\u0113\u0119\u011E\u0126\u012B\u0130" +
		"\u0135\u0137\u0144\u0149";
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
	public OpenInline(): TerminalNode | undefined { return this.tryGetToken(KojiParser.OpenInline, 0); }
	public ElemName(): TerminalNode { return this.getToken(KojiParser.ElemName, 0); }
	public Colon(): TerminalNode { return this.getToken(KojiParser.Colon, 0); }
	public CloseInline(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseInline, 0); }
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
	public OpenInline2(): TerminalNode | undefined { return this.tryGetToken(KojiParser.OpenInline2, 0); }
	public CloseInline2(): TerminalNode | undefined { return this.tryGetToken(KojiParser.CloseInline2, 0); }
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
	public FuriganaParen(): TerminalNode { return this.getToken(KojiParser.FuriganaParen, 0); }
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
	public Kaeriten(): TerminalNode { return this.getToken(KojiParser.Kaeriten, 0); }
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
	public Okurigana(): TerminalNode { return this.getToken(KojiParser.Okurigana, 0); }
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
	public AnnotationParen(): TerminalNode { return this.getToken(KojiParser.AnnotationParen, 0); }
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


