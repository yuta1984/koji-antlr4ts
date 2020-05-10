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
	public static readonly HEADER = 1;
	public static readonly FURIGANA = 2;
	public static readonly KAERITEN = 3;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "HEADER", "FURIGANA", "KAERITEN",
	];

	public static readonly ruleNames: string[] = [
		"OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "Bar", "FuriganaOpen", "AnnotationOpen", 
		"AnnotationClose", "PersonOpen", "PersonClose", "PlaceOpen", "PlaceClose", 
		"DateOpen", "DateClose", "AttrsOpen", "KaeritenMark", "TatetenChar", "OkuriganaMark", 
		"IllegibleMark", "BugHoleMark", "NonJp", "Kanji", "Kana", "HiraganaChar", 
		"KatakanaChar", "HentaikanaChar", "NonJpChar", "KanjiChar", "Lb", "WS", 
		"ElemName", "Colon", "HeaderLb", "AttrsClose", "ID", "Class", "AttrName", 
		"FuriganaContent", "FuriganaSep", "FuriganaClose", "KaeritenChar",
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
		"IllegibleMark", "BugHoleMark", "NonJp", "Kanji", "Kana", "NonJpChar", 
		"KanjiChar", "Lb", "WS", "ElemName", "Colon", "HeaderLb", "AttrsClose", 
		"ID", "Class", "FuriganaContent", "FuriganaSep", "FuriganaClose", "KaeritenChar",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u0130\b\x01" +
		"\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t" +
		"\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t" +
		"\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11" +
		"\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16" +
		"\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B" +
		"\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t" +
		" \x04!\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(" +
		"\x04)\t)\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041" +
		"\t1\x042\t2\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x06\x1E" +
		"\xD2\n\x1E\r\x1E\x0E\x1E\xD3\x03\x1F\x06\x1F\xD7\n\x1F\r\x1F\x0E\x1F\xD8" +
		"\x03 \x06 \xDC\n \r \x0E \xDD\x03 \x06 \xE1\n \r \x0E \xE2\x03 \x06 \xE6" +
		"\n \r \x0E \xE7\x05 \xEA\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$" +
		"\x03%\x03%\x03&\x03&\x03\'\x06\'\xF9\n\'\r\'\x0E\'\xFA\x03\'\x03\'\x03" +
		"(\x03(\x06(\u0101\n(\r(\x0E(\u0102\x03)\x03)\x03)\x03)\x03*\x03*\x03*" +
		"\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x07" +
		".\u0119\n.\f.\x0E.\u011C\v.\x03/\x03/\x06/\u0120\n/\r/\x0E/\u0121\x03" +
		"0\x030\x031\x031\x031\x031\x032\x062\u012B\n2\r2\x0E2\u012C\x032\x032" +
		"\x02\x02\x023\x06\x02\x03\b\x02\x04\n\x02\x05\f\x02\x06\x0E\x02\x07\x10" +
		"\x02\b\x12\x02\t\x14\x02\n\x16\x02\v\x18\x02\f\x1A\x02\r\x1C\x02\x0E\x1E" +
		"\x02\x0F \x02\x10\"\x02\x11$\x02\x12&\x02\x13(\x02\x14*\x02\x15,\x02\x16" +
		".\x02\x170\x02\x182\x02\x194\x02\x1A6\x02\x1B8\x02\x1C:\x02\x1D<\x02\x1E" +
		">\x02\x1F@\x02 B\x02!D\x02\x02F\x02\x02H\x02\x02J\x02\"L\x02#N\x02$P\x02" +
		"%R\x02&T\x02\'V\x02(X\x02)Z\x02*\\\x02+^\x02\x02`\x02,b\x02-d\x02.f\x02" +
		"/\x06\x02\x03\x04\x05\x0E\x07\x02//\u2012\u2012\u2017\u2017\u2214\u2214" +
		"\u30FE\u30FE\x03\x02\u3042\u30A1\x04\x02\u30A2\u3101\u31F2\u3201\x03\x02" +
		"2\u1B14\x14\x02\f\f/\u2012\u2017\u2017\u2214\u2214\u25A2\u25A3\u300C\u300D" +
		"\u3012\u3013\u3016\u3017\u3042\u3101\u31F2\u3201\u3402\u9FEC\uFF07\uFF07" +
		"\uFF0A\uFF0B\uFF1E\uFF1E\uFF20\uFF20\uFF3D\uFF3D\uFF3F\uFF3F\uFF5D\uFF5F" +
		"\x07\x02\u2E82\u2FE1\u3002\u3009\u3402\u4DC1\u4E02\uA001\uF902\uFB01\x04" +
		"\x02\v\v\"\"\x04\x02%%\uFF05\uFF05\x04\x02,,\uFF0C\uFF0C\x03\x02C|\x05" +
		"\x02/02;C|\x14\x02\u30EE\u30EE\u4E02\u4E03\u4E05\u4E05\u4E0B\u4E0D\u4E1B" +
		"\u4E1B\u4E2F\u4E2F\u4E5B\u4E5B\u4E5F\u4E5F\u4E8E\u4E8E\u4E96\u4E96\u4EBC" +
		"\u4EBC\u516D\u516D\u516F\u516F\u5343\u5343\u56DD\u56DD\u5732\u5732\u592B" +
		"\u592B\u7534\u7534\x02\u0136\x02\x06\x03\x02\x02\x02\x02\b\x03\x02\x02" +
		"\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E\x03\x02\x02\x02" +
		"\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14\x03\x02\x02\x02" +
		"\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A\x03\x02\x02\x02" +
		"\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02\x02\x02\x02 \x03\x02\x02\x02" +
		"\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02\x02&\x03\x02\x02\x02\x02(" +
		"\x03\x02\x02\x02\x02*\x03\x02\x02\x02\x02,\x03\x02\x02\x02\x02.\x03\x02" +
		"\x02\x02\x020\x03\x02\x02\x02\x022\x03\x02\x02\x02\x024\x03\x02\x02\x02" +
		"\x026\x03\x02\x02\x02\x028\x03\x02\x02\x02\x02:\x03\x02\x02\x02\x02<\x03" +
		"\x02\x02\x02\x02>\x03\x02\x02\x02\x02@\x03\x02\x02\x02\x02B\x03\x02\x02" +
		"\x02\x02J\x03\x02\x02\x02\x02L\x03\x02\x02\x02\x02N\x03\x02\x02\x02\x02" +
		"P\x03\x02\x02\x02\x03R\x03\x02\x02\x02\x03T\x03\x02\x02\x02\x03V\x03\x02" +
		"\x02\x02\x03X\x03\x02\x02\x02\x03Z\x03\x02\x02\x02\x03\\\x03\x02\x02\x02" +
		"\x04`\x03\x02\x02\x02\x04b\x03\x02\x02\x02\x04d\x03\x02\x02\x02\x05f\x03" +
		"\x02\x02\x02\x06h\x03\x02\x02\x02\bl\x03\x02\x02\x02\np\x03\x02\x02\x02" +
		"\fu\x03\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x80\x03\x02\x02\x02\x12\x86" +
		"\x03\x02\x02\x02\x14\x8D\x03\x02\x02\x02\x16\x94\x03\x02\x02\x02\x18\x9C" +
		"\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02\x1C\xA8\x03\x02\x02\x02\x1E\xAA" +
		"\x03\x02\x02\x02 \xAC\x03\x02\x02\x02\"\xB0\x03\x02\x02\x02$\xB2\x03\x02" +
		"\x02\x02&\xB4\x03\x02\x02\x02(\xB6\x03\x02\x02\x02*\xB8\x03\x02\x02\x02" +
		",\xBA\x03\x02\x02\x02.\xBC\x03\x02\x02\x020\xBE\x03\x02\x02\x022\xC0\x03" +
		"\x02\x02\x024\xC4\x03\x02\x02\x026\xC8\x03\x02\x02\x028\xCA\x03\x02\x02" +
		"\x02:\xCC\x03\x02\x02\x02<\xCE\x03\x02\x02\x02>\xD1\x03\x02\x02\x02@\xD6" +
		"\x03\x02\x02\x02B\xE9\x03\x02\x02\x02D\xEB\x03\x02\x02\x02F\xED\x03\x02" +
		"\x02\x02H\xEF\x03\x02\x02\x02J\xF1\x03\x02\x02\x02L\xF3\x03\x02\x02\x02" +
		"N\xF5\x03\x02\x02\x02P\xF8\x03\x02\x02\x02R\u0100\x03\x02\x02\x02T\u0104" +
		"\x03\x02\x02\x02V\u0108\x03\x02\x02\x02X\u010C\x03\x02\x02\x02Z\u0110" +
		"\x03\x02\x02\x02\\\u0113\x03\x02\x02\x02^\u0116\x03\x02\x02\x02`\u011F" +
		"\x03\x02\x02\x02b\u0123\x03\x02\x02\x02d\u0125\x03\x02\x02\x02f\u012A" +
		"\x03\x02\x02\x02hi\x07\uFF07\x02\x02ij\x03\x02\x02\x02jk\b\x02\x02\x02" +
		"k\x07\x03\x02\x02\x02lm\x07\f\x02\x02mn\x07\uFF07\x02\x02no\x07\f\x02" +
		"\x02o\t\x03\x02\x02\x02pq\x07\uFF07\x02\x02qr\x07\uFF07\x02\x02rs\x03" +
		"\x02\x02\x02st\b\x04\x02\x02t\v\x03\x02\x02\x02uv\x07\f\x02\x02vw\x07" +
		"\uFF07\x02\x02wx\x07\uFF07\x02\x02xy\x07\f\x02\x02y\r\x03\x02\x02\x02" +
		"z{\x07\uFF07\x02\x02{|\x07\uFF07\x02\x02|}\x07\uFF07\x02\x02}~\x03\x02" +
		"\x02\x02~\x7F\b\x06\x02\x02\x7F\x0F\x03\x02\x02\x02\x80\x81\x07\f\x02" +
		"\x02\x81\x82\x07\uFF07\x02\x02\x82\x83\x07\uFF07\x02\x02\x83\x84\x07\uFF07" +
		"\x02\x02\x84\x85\x07\f\x02\x02\x85\x11\x03\x02\x02\x02\x86\x87\x07\uFF07" +
		"\x02\x02\x87\x88\x07\uFF07\x02\x02\x88\x89\x07\uFF07\x02\x02\x89\x8A\x07" +
		"\uFF07\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\b\b\x02\x02\x8C\x13\x03" +
		"\x02\x02\x02\x8D\x8E\x07\f\x02\x02\x8E\x8F\x07\uFF07\x02\x02\x8F\x90\x07" +
		"\uFF07\x02\x02\x90\x91\x07\uFF07\x02\x02\x91\x92\x07\uFF07\x02\x02\x92" +
		"\x93\x07\f\x02\x02\x93\x15\x03\x02\x02\x02\x94\x95\x07\uFF07\x02\x02\x95" +
		"\x96\x07\uFF07\x02\x02\x96\x97\x07\uFF07\x02\x02\x97\x98\x07\uFF07\x02" +
		"\x02\x98\x99\x07\uFF07\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\b\n\x02" +
		"\x02\x9B\x17\x03\x02\x02\x02\x9C\x9D\x07\f\x02\x02\x9D\x9E\x07\uFF07\x02" +
		"\x02\x9E\x9F\x07\uFF07\x02\x02\x9F\xA0\x07\uFF07\x02\x02\xA0\xA1\x07\uFF07" +
		"\x02\x02\xA1\xA2\x07\uFF07\x02\x02\xA2\xA3\x07\f\x02\x02\xA3\x19\x03\x02" +
		"\x02\x02\xA4\xA5\x07\u300C\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\b\f" +
		"\x02\x02\xA7\x1B\x03\x02\x02\x02\xA8\xA9\x07\u300D\x02\x02\xA9\x1D\x03" +
		"\x02\x02\x02\xAA\xAB\x07\uFF5E\x02\x02\xAB\x1F\x03\x02\x02\x02\xAC\xAD" +
		"\x07\uFF0A\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\b\x0F\x03\x02\xAF!" +
		"\x03\x02\x02\x02\xB0\xB1\x07\u3012\x02\x02\xB1#\x03\x02\x02\x02\xB2\xB3" +
		"\x07\u3013\x02\x02\xB3%\x03\x02\x02\x02\xB4\xB5\x07\uFF5D\x02\x02\xB5" +
		"\'\x03\x02\x02\x02\xB6\xB7\x07\uFF5F\x02\x02\xB7)\x03\x02\x02\x02\xB8" +
		"\xB9\x07\u3016\x02\x02\xB9+\x03\x02\x02\x02\xBA\xBB\x07\u3017\x02\x02" +
		"\xBB-\x03\x02\x02\x02\xBC\xBD\x07\uFF1E\x02\x02\xBD/\x03\x02\x02\x02\xBE" +
		"\xBF\x07\uFF20\x02\x02\xBF1\x03\x02\x02\x02\xC0\xC1\x07\uFF3D\x02\x02" +
		"\xC1\xC2\x03\x02\x02\x02\xC2\xC3\b\x18\x02\x02\xC33\x03\x02\x02\x02\xC4" +
		"\xC5\x07\uFF41\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\b\x19\x04\x02\xC7" +
		"5\x03\x02\x02\x02\xC8\xC9\t\x02\x02\x02\xC97\x03\x02\x02\x02\xCA\xCB\x07" +
		"\uFFE5\x02\x02\xCB9\x03\x02\x02\x02\xCC\xCD\x07\u25A3\x02\x02\xCD;\x03" +
		"\x02\x02\x02\xCE\xCF\x07\u25A2\x02\x02\xCF=\x03\x02\x02\x02\xD0\xD2\x05" +
		"J$\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02" +
		"\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4?\x03\x02\x02\x02\xD5\xD7\x05L%\x02" +
		"\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD8\xD9\x03\x02\x02\x02\xD9A\x03\x02\x02\x02\xDA\xDC\x05D!\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE" +
		"\x03\x02\x02\x02\xDE\xEA\x03\x02\x02\x02\xDF\xE1\x05F\"\x02\xE0\xDF\x03" +
		"\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03" +
		"\x02\x02\x02\xE3\xEA\x03\x02\x02\x02\xE4\xE6\x05H#\x02\xE5\xE4\x03\x02" +
		"\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xDB\x03\x02\x02\x02\xE9\xE0\x03\x02" +
		"\x02\x02\xE9\xE5\x03\x02\x02\x02\xEAC\x03\x02\x02\x02\xEB\xEC\t\x03\x02" +
		"\x02\xECE\x03\x02\x02\x02\xED\xEE\t\x04\x02\x02\xEEG\x03\x02\x02\x02\xEF" +
		"\xF0\t\x05\x02\x02\xF0I\x03\x02\x02\x02\xF1\xF2\n\x06\x02\x02\xF2K\x03" +
		"\x02\x02\x02\xF3\xF4\t\x07\x02\x02\xF4M\x03\x02\x02\x02\xF5\xF6\x07\f" +
		"\x02\x02\xF6O\x03\x02\x02\x02\xF7\xF9\t\b\x02\x02\xF8\xF7\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02" +
		"\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\b\'\x05\x02\xFDQ\x03\x02\x02\x02" +
		"\xFE\u0101\x05B \x02\xFF\u0101\x05L%\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0100\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103S\x03\x02\x02\x02\u0104\u0105\x07" +
		"\uFF1C\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\b)\x06\x02\u0107" +
		"U\x03\x02\x02\x02\u0108\u0109\x07\f\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010B\b*\x06\x02\u010BW\x03\x02\x02\x02\u010C\u010D\x07\uFF3F\x02" +
		"\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\b+\x06\x02\u010FY\x03\x02" +
		"\x02\x02\u0110\u0111\t\t\x02\x02\u0111\u0112\x05^.\x02\u0112[\x03\x02" +
		"\x02\x02\u0113\u0114\t\n\x02\x02\u0114\u0115\x05^.\x02\u0115]\x03\x02" +
		"\x02\x02\u0116\u011A\t\v\x02\x02\u0117\u0119\t\f\x02\x02\u0118\u0117\x03" +
		"\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B_\x03\x02\x02\x02\u011C\u011A\x03\x02\x02" +
		"\x02\u011D\u0120\x05B \x02\u011E\u0120\x05J$\x02\u011F\u011D\x03\x02\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122a\x03\x02\x02\x02\u0123" +
		"\u0124\x07\uFF5E\x02\x02\u0124c\x03\x02\x02\x02\u0125\u0126\x07\uFF0B" +
		"\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\b1\x06\x02\u0128e\x03" +
		"\x02\x02\x02\u0129\u012B\t\r\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\b2\x06\x02\u012Fg\x03" +
		"\x02\x02\x02\x13\x02\x03\x04\x05\xD3\xD8\xDD\xE2\xE7\xE9\xFA\u0100\u0102" +
		"\u011A\u011F\u0121\u012C\x07\x07\x03\x02\x07\x04\x02\x07\x05\x02\b\x02" +
		"\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KojiLexer.__ATN) {
			KojiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KojiLexer._serializedATN));
		}

		return KojiLexer.__ATN;
	}

}

