// Generated from src/KojiLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class KojiLexer extends Lexer {
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
	public static readonly HEADER = 1;
	public static readonly FURIGANA = 2;
	public static readonly KAERITEN = 3;
	public static readonly ANNOTATION = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "HEADER", "FURIGANA", "KAERITEN", "ANNOTATION",
	];

	public static readonly ruleNames: string[] = [
		"OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "Bar", "FuriganaPre", "FuriganaOpen", "AnnotationOpen", 
		"PersonOpen", "PersonClose", "PlaceOpen", "PlaceClose", "DateOpen", "DateClose", 
		"AttrsOpen", "KaeritenMark", "TatetenChar", "OkuriganaMark", "IllegibleMark", 
		"BugHoleMark", "NonJp", "Kanji", "Kana", "HiraganaChar", "KatakanaChar", 
		"HentaikanaChar", "NonJpChar", "KanjiChar", "Lb", "WS", "ElemName", "Colon", 
		"HeaderLb", "AttrsClose", "ID", "Class", "AttrName", "FuriganaContent", 
		"FuriganaSep", "FuriganaClose", "KaeritenChar", "AnnotationContent", "AnnotationClose",
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
		undefined, "'\uFF09'", undefined, undefined, "'\u3011'",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KojiLexer._LITERAL_NAMES, KojiLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KojiLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(KojiLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "KojiLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return KojiLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return KojiLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return KojiLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return KojiLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x021\u0142\b\x01" +
		"\b\x01\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04" +
		"\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04" +
		"\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04" +
		"\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04" +
		"\x16\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04" +
		"\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04" +
		" \t \x04!\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(" +
		"\t(\x04)\t)\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x04" +
		"1\t1\x042\t2\x043\t3\x044\t4\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x06\x1E\xD9\n\x1E\r\x1E\x0E\x1E\xDA\x03\x1F\x06" +
		"\x1F\xDE\n\x1F\r\x1F\x0E\x1F\xDF\x03 \x06 \xE3\n \r \x0E \xE4\x03 \x06" +
		" \xE8\n \r \x0E \xE9\x03 \x06 \xED\n \r \x0E \xEE\x05 \xF1\n \x03!\x03" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x06\'\u0100" +
		"\n\'\r\'\x0E\'\u0101\x03\'\x03\'\x03(\x03(\x06(\u0108\n(\r(\x0E(\u0109" +
		"\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x03-\x03-\x03-\x03.\x03.\x07.\u0120\n.\f.\x0E.\u0123\v.\x03/\x03" +
		"/\x03/\x06/\u0128\n/\r/\x0E/\u0129\x030\x030\x031\x031\x031\x031\x032" +
		"\x062\u0133\n2\r2\x0E2\u0134\x032\x032\x033\x073\u013A\n3\f3\x0E3\u013D" +
		"\v3\x034\x034\x034\x034\x02\x02\x025\x07\x02\x03\t\x02\x04\v\x02\x05\r" +
		"\x02\x06\x0F\x02\x07\x11\x02\b\x13\x02\t\x15\x02\n\x17\x02\v\x19\x02\f" +
		"\x1B\x02\r\x1D\x02\x0E\x1F\x02\x0F!\x02\x10#\x02\x11%\x02\x12\'\x02\x13" +
		")\x02\x14+\x02\x15-\x02\x16/\x02\x171\x02\x183\x02\x195\x02\x1A7\x02\x1B" +
		"9\x02\x1C;\x02\x1D=\x02\x1E?\x02\x1FA\x02 C\x02!E\x02\x02G\x02\x02I\x02" +
		"\x02K\x02\"M\x02#O\x02$Q\x02%S\x02&U\x02\'W\x02(Y\x02)[\x02*]\x02+_\x02" +
		"\x02a\x02,c\x02-e\x02.g\x02/i\x020k\x021\x07\x02\x03\x04\x05\x06\x10\x04" +
		"\x0211\uFF11\uFF11\x07\x02//\u2012\u2012\u2017\u2017\u2214\u2214\u30FE" +
		"\u30FE\x03\x02\u3042\u30A1\x04\x02\u30A2\u3101\u31F2\u3201\x03\x022\u1B14" +
		"\x15\x02\f\f/\u2012\u2017\u2017\u2214\u2214\u25A2\u25A3\u300C\u300D\u3012" +
		"\u3013\u3016\u3017\u3042\u3101\u31F2\u3201\u3402\u9FEC\uFF07\uFF07\uFF0A" +
		"\uFF0B\uFF11\uFF11\uFF1E\uFF1E\uFF20\uFF20\uFF3D\uFF3D\uFF3F\uFF3F\uFF5D" +
		"\uFF5F\x07\x02\u2E82\u2FE1\u3002\u3009\u3402\u4DC1\u4E02\uA001\uF902\uFB01" +
		"\x04\x02\v\v\"\"\x04\x02%%\uFF05\uFF05\x04\x02,,\uFF0C\uFF0C\x03\x02C" +
		"|\x05\x02/02;C|\x14\x02\u30EE\u30EE\u4E02\u4E03\u4E05\u4E05\u4E0B\u4E0D" +
		"\u4E1B\u4E1B\u4E2F\u4E2F\u4E5B\u4E5B\u4E5F\u4E5F\u4E8E\u4E8E\u4E96\u4E96" +
		"\u4EBC\u4EBC\u516D\u516D\u516F\u516F\u5343\u5343\u56DD\u56DD\u5732\u5732" +
		"\u592B\u592B\u7534\u7534\x04\x02\f\f\u3013\u3013\x02\u0149\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
		"\x02\x02\x02\x02C\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02" +
		"\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x03S\x03\x02\x02\x02\x03" +
		"U\x03\x02\x02\x02\x03W\x03\x02\x02\x02\x03Y\x03\x02\x02\x02\x03[\x03\x02" +
		"\x02\x02\x03]\x03\x02\x02\x02\x04a\x03\x02\x02\x02\x04c\x03\x02\x02\x02" +
		"\x04e\x03\x02\x02\x02\x05g\x03\x02\x02\x02\x06i\x03\x02\x02\x02\x06k\x03" +
		"\x02\x02\x02\x07m\x03\x02\x02\x02\tq\x03\x02\x02\x02\vu\x03\x02\x02\x02" +
		"\rz\x03\x02\x02\x02\x0F\x7F\x03\x02\x02\x02\x11\x85\x03\x02\x02\x02\x13" +
		"\x8B\x03\x02\x02\x02\x15\x92\x03\x02\x02\x02\x17\x99\x03\x02\x02\x02\x19" +
		"\xA1\x03\x02\x02\x02\x1B\xA9\x03\x02\x02\x02\x1D\xAD\x03\x02\x02\x02\x1F" +
		"\xAF\x03\x02\x02\x02!\xB1\x03\x02\x02\x02#\xB3\x03\x02\x02\x02%\xB7\x03" +
		"\x02\x02\x02\'\xBB\x03\x02\x02\x02)\xBD\x03\x02\x02\x02+\xBF\x03\x02\x02" +
		"\x02-\xC1\x03\x02\x02\x02/\xC3\x03\x02\x02\x021\xC5\x03\x02\x02\x023\xC7" +
		"\x03\x02\x02\x025\xCB\x03\x02\x02\x027\xCF\x03\x02\x02\x029\xD1\x03\x02" +
		"\x02\x02;\xD3\x03\x02\x02\x02=\xD5\x03\x02\x02\x02?\xD8\x03\x02\x02\x02" +
		"A\xDD\x03\x02\x02\x02C\xF0\x03\x02\x02\x02E\xF2\x03\x02\x02\x02G\xF4\x03" +
		"\x02\x02\x02I\xF6\x03\x02\x02\x02K\xF8\x03\x02\x02\x02M\xFA\x03\x02\x02" +
		"\x02O\xFC\x03\x02\x02\x02Q\xFF\x03\x02\x02\x02S\u0107\x03\x02\x02\x02" +
		"U\u010B\x03\x02\x02\x02W\u010F\x03\x02\x02\x02Y\u0113\x03\x02\x02\x02" +
		"[\u0117\x03\x02\x02\x02]\u011A\x03\x02\x02\x02_\u011D\x03\x02\x02\x02" +
		"a\u0127\x03\x02\x02\x02c\u012B\x03\x02\x02\x02e\u012D\x03\x02\x02\x02" +
		"g\u0132\x03\x02\x02\x02i\u013B\x03\x02\x02\x02k\u013E\x03\x02\x02\x02" +
		"mn\x07\uFF07\x02\x02no\x03\x02\x02\x02op\b\x02\x02\x02p\b\x03\x02\x02" +
		"\x02qr\x07\f\x02\x02rs\x07\uFF07\x02\x02st\x07\f\x02\x02t\n\x03\x02\x02" +
		"\x02uv\x07\uFF07\x02\x02vw\x07\uFF07\x02\x02wx\x03\x02\x02\x02xy\b\x04" +
		"\x02\x02y\f\x03\x02\x02\x02z{\x07\f\x02\x02{|\x07\uFF07\x02\x02|}\x07" +
		"\uFF07\x02\x02}~\x07\f\x02\x02~\x0E\x03\x02\x02\x02\x7F\x80\x07\uFF07" +
		"\x02\x02\x80\x81\x07\uFF07\x02\x02\x81\x82\x07\uFF07\x02\x02\x82\x83\x03" +
		"\x02\x02\x02\x83\x84\b\x06\x02\x02\x84\x10\x03\x02\x02\x02\x85\x86\x07" +
		"\f\x02\x02\x86\x87\x07\uFF07\x02\x02\x87\x88\x07\uFF07\x02\x02\x88\x89" +
		"\x07\uFF07\x02\x02\x89\x8A\x07\f\x02\x02\x8A\x12\x03\x02\x02\x02\x8B\x8C" +
		"\x07\uFF07\x02\x02\x8C\x8D\x07\uFF07\x02\x02\x8D\x8E\x07\uFF07\x02\x02" +
		"\x8E\x8F\x07\uFF07\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\b\b\x02\x02" +
		"\x91\x14\x03\x02\x02\x02\x92\x93\x07\f\x02\x02\x93\x94\x07\uFF07\x02\x02" +
		"\x94\x95\x07\uFF07\x02\x02\x95\x96\x07\uFF07\x02\x02\x96\x97\x07\uFF07" +
		"\x02\x02\x97\x98\x07\f\x02\x02\x98\x16\x03\x02\x02\x02\x99\x9A\x07\uFF07" +
		"\x02\x02\x9A\x9B\x07\uFF07\x02\x02\x9B\x9C\x07\uFF07\x02\x02\x9C\x9D\x07" +
		"\uFF07\x02\x02\x9D\x9E\x07\uFF07\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0" +
		"\b\n\x02\x02\xA0\x18\x03\x02\x02\x02\xA1\xA2\x07\f\x02\x02\xA2\xA3\x07" +
		"\uFF07\x02\x02\xA3\xA4\x07\uFF07\x02\x02\xA4\xA5\x07\uFF07\x02\x02\xA5" +
		"\xA6\x07\uFF07\x02\x02\xA6\xA7\x07\uFF07\x02\x02\xA7\xA8\x07\f\x02\x02" +
		"\xA8\x1A\x03\x02\x02\x02\xA9\xAA\x07\u300C\x02\x02\xAA\xAB\x03\x02\x02" +
		"\x02\xAB\xAC\b\f\x02\x02\xAC\x1C\x03\x02\x02\x02\xAD\xAE\x07\u300D\x02" +
		"\x02\xAE\x1E\x03\x02\x02\x02\xAF\xB0\x07\uFF5E\x02\x02\xB0 \x03\x02\x02" +
		"\x02\xB1\xB2\t\x02\x02\x02\xB2\"\x03\x02\x02\x02\xB3\xB4\x07\uFF0A\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\b\x10\x03\x02\xB6$\x03\x02\x02\x02" +
		"\xB7\xB8\x07\u3012\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\b\x11\x04\x02" +
		"\xBA&\x03\x02\x02\x02\xBB\xBC\x07\uFF5D\x02\x02\xBC(\x03\x02\x02\x02\xBD" +
		"\xBE\x07\uFF5F\x02\x02\xBE*\x03\x02\x02\x02\xBF\xC0\x07\u3016\x02\x02" +
		"\xC0,\x03\x02\x02\x02\xC1\xC2\x07\u3017\x02\x02\xC2.\x03\x02\x02\x02\xC3" +
		"\xC4\x07\uFF1E\x02\x02\xC40\x03\x02\x02\x02\xC5\xC6\x07\uFF20\x02\x02" +
		"\xC62\x03\x02\x02\x02\xC7\xC8\x07\uFF3D\x02\x02\xC8\xC9\x03\x02\x02\x02" +
		"\xC9\xCA\b\x18\x02\x02\xCA4\x03\x02\x02\x02\xCB\xCC\x07\uFF41\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\xCE\b\x19\x05\x02\xCE6\x03\x02\x02\x02\xCF" +
		"\xD0\t\x03\x02\x02\xD08\x03\x02\x02\x02\xD1\xD2\x07\uFFE5\x02\x02\xD2" +
		":\x03\x02\x02\x02\xD3\xD4\x07\u25A2\x02\x02\xD4<\x03\x02\x02\x02\xD5\xD6" +
		"\x07\u25A3\x02\x02\xD6>\x03\x02\x02\x02\xD7\xD9\x05K$\x02\xD8\xD7\x03" +
		"\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB@\x03\x02\x02\x02\xDC\xDE\x05M%\x02\xDD\xDC\x03\x02\x02" +
		"\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0B\x03\x02\x02\x02\xE1\xE3\x05E!\x02\xE2\xE1\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xF1\x03\x02\x02\x02\xE6\xE8\x05G\"\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9" +
		"\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xF1" +
		"\x03\x02\x02\x02\xEB\xED\x05I#\x02\xEC\xEB\x03\x02\x02\x02\xED\xEE\x03" +
		"\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03" +
		"\x02\x02\x02\xF0\xE2\x03\x02\x02\x02\xF0\xE7\x03\x02\x02\x02\xF0\xEC\x03" +
		"\x02\x02\x02\xF1D\x03\x02\x02\x02\xF2\xF3\t\x04\x02\x02\xF3F\x03\x02\x02" +
		"\x02\xF4\xF5\t\x05\x02\x02\xF5H\x03\x02\x02\x02\xF6\xF7\t\x06\x02\x02" +
		"\xF7J\x03\x02\x02\x02\xF8\xF9\n\x07\x02\x02\xF9L\x03\x02\x02\x02\xFA\xFB" +
		"\t\b\x02\x02\xFBN\x03\x02\x02\x02\xFC\xFD\x07\f\x02\x02\xFDP\x03\x02\x02" +
		"\x02\xFE\u0100\t\t\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02" +
		"\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0104\b\'\x06\x02\u0104R\x03\x02\x02\x02\u0105" +
		"\u0108\x05C \x02\u0106\u0108\x05M%\x02\u0107\u0105\x03\x02\x02\x02\u0107" +
		"\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0107\x03\x02" +
		"\x02\x02\u0109\u010A\x03\x02\x02\x02\u010AT\x03\x02\x02\x02\u010B\u010C" +
		"\x07\uFF1C\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\b)\x07\x02" +
		"\u010EV\x03\x02\x02\x02\u010F\u0110\x07\f\x02\x02\u0110\u0111\x03\x02" +
		"\x02\x02\u0111\u0112\b*\x07\x02\u0112X\x03\x02\x02\x02\u0113\u0114\x07" +
		"\uFF3F\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\b+\x07\x02\u0116" +
		"Z\x03\x02\x02\x02\u0117\u0118\t\n\x02\x02\u0118\u0119\x05_.\x02\u0119" +
		"\\\x03\x02\x02\x02\u011A\u011B\t\v\x02\x02\u011B\u011C\x05_.\x02\u011C" +
		"^\x03\x02\x02\x02\u011D\u0121\t\f\x02\x02\u011E\u0120\t\r\x02\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02" +
		"\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122`\x03\x02\x02\x02\u0123\u0121" +
		"\x03\x02\x02\x02\u0124\u0128\x05C \x02\u0125\u0128\x05M%\x02\u0126\u0128" +
		"\x05K$\x02\u0127\u0124\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127" +
		"\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u0129\u012A\x03\x02\x02\x02\u012Ab\x03\x02\x02\x02\u012B\u012C" +
		"\x07\uFF5E\x02\x02\u012Cd\x03\x02\x02\x02\u012D\u012E\x07\uFF0B\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\u0130\b1\x07\x02\u0130f\x03\x02\x02" +
		"\x02\u0131\u0133\t\x0E\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133\u0134" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135\u0136\x03\x02\x02\x02\u0136\u0137\b2\x07\x02\u0137h\x03\x02\x02" +
		"\x02\u0138\u013A\n\x0F\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D" +
		"\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02" +
		"\u013Cj\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x07\u3013" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\b4\x07\x02\u0141l\x03" +
		"\x02\x02\x02\x15\x02\x03\x04\x05\x06\xDA\xDF\xE4\xE9\xEE\xF0\u0101\u0107" +
		"\u0109\u0121\u0127\u0129\u0134\u013B\b\x07\x03\x02\x07\x04\x02\x07\x06" +
		"\x02\x07\x05\x02\b\x02\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KojiLexer.__ATN) {
			KojiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KojiLexer._serializedATN));
		}

		return KojiLexer.__ATN;
	}

}

