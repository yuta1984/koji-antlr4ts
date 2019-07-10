// Generated from KojiLexer.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly HEADER = 1;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "HEADER",
	];

	public static readonly ruleNames: string[] = [
		"OpenBlock1", "CloseBlock1", "OpenBlock2", "CloseBlock2", "OpenBlock3", 
		"CloseBlock3", "OpenBlock4", "CloseBlock4", "OpenBlock5", "CloseBlock5", 
		"OpenInline", "CloseInline", "OpenInline2", "CloseInline2", "Bar", "FuriganaParen", 
		"AnnotationParen", "Kaeriten", "Okurigana", "Illegible", "BugHole", "NonJp", 
		"Kanji", "Kana", "HiraganaChar", "KatakanaChar", "HentaikanaChar", "NonJpChar", 
		"KanjiChar", "Lb", "WS", "ElemName", "Colon", "HeaderLb", "ID", "Class", 
		"AttrName",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\u0105\b\x01" +
		"\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06" +
		"\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f" +
		"\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04" +
		"\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04" +
		"\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04" +
		"\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04" +
		"\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x06\x11\x9D\n\x11\r\x11\x0E\x11\x9E\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\xA7\n\x12\r\x12\x0E\x12\xA8\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x06\x13\xAF\n\x13\r\x13\x0E\x13\xB0\x03\x14" +
		"\x03\x14\x06\x14\xB5\n\x14\r\x14\x0E\x14\xB6\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x17\x06\x17\xBE\n\x17\r\x17\x0E\x17\xBF\x03\x18\x06\x18\xC3\n" +
		"\x18\r\x18\x0E\x18\xC4\x03\x19\x06\x19\xC8\n\x19\r\x19\x0E\x19\xC9\x03" +
		"\x19\x06\x19\xCD\n\x19\r\x19\x0E\x19\xCE\x03\x19\x06\x19\xD2\n\x19\r\x19" +
		"\x0E\x19\xD3\x05\x19\xD6\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x06 \xE5" +
		"\n \r \x0E \xE6\x03 \x03 \x03!\x03!\x06!\xED\n!\r!\x0E!\xEE\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03&" +
		"\x03&\x03&\x06&\u0102\n&\r&\x0E&\u0103\x02\x02\x02\'\x04\x02\x03\x06\x02" +
		"\x04\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02\b\x10\x02\t\x12\x02\n\x14\x02" +
		"\v\x16\x02\f\x18\x02\r\x1A\x02\x0E\x1C\x02\x0F\x1E\x02\x10 \x02\x11\"" +
		"\x02\x12$\x02\x13&\x02\x14(\x02\x15*\x02\x16,\x02\x17.\x02\x180\x02\x19" +
		"2\x02\x1A4\x02\x026\x02\x028\x02\x02:\x02\x1B<\x02\x1C>\x02\x1D@\x02\x1E" +
		"B\x02\x1FD\x02 F\x02!H\x02\"J\x02#L\x02\x02\x04\x02\x03\f\v\x02\u30EE" +
		"\u30EE\u4E02\u4E02\u4E0B\u4E0D\u4E1B\u4E1B\u4E2F\u4E2F\u4E5B\u4E5B\u4E8E" +
		"\u4E8E\u70BB\u70BB\u7534\u7534\x03\x02\u3042\u30A1\x04\x02\u30A2\u3101" +
		"\u31F2\u3201\x03\x022\u1B14\x11\x02\f\f\u25A3\u25A3\u25FE\u25FE\u300C" +
		"\u300D\u3012\u3013\u3042\u3101\u31F2\u3201\u3402\u9FEC\uFF07\uFF07\uFF0A" +
		"\uFF0B\uFF1E\uFF1E\uFF20\uFF20\uFF3D\uFF3D\uFF3F\uFF3F\uFF5D\uFF5F\x03" +
		"\x02\u3402\u9FEC\x04\x02\v\v\"\"\x04\x02%%\uFF05\uFF05\x04\x02,,\uFF0C" +
		"\uFF0C\x05\x022<C\\c|\x02\u0114\x02\x04\x03\x02\x02\x02\x02\x06\x03\x02" +
		"\x02\x02\x02\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02" +
		"\x02\x02\x0E\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02" +
		"\x02\x02\x14\x03\x02\x02\x02\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02\x02" +
		"\x02\x02\x1A\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02\x02" +
		"\x02\x02 \x03\x02\x02\x02\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02\x02" +
		"&\x03\x02\x02\x02\x02(\x03\x02\x02\x02\x02*\x03\x02\x02\x02\x02,\x03\x02" +
		"\x02\x02\x02.\x03\x02\x02\x02\x020\x03\x02\x02\x02\x022\x03\x02\x02\x02" +
		"\x02:\x03\x02\x02\x02\x02<\x03\x02\x02\x02\x02>\x03\x02\x02\x02\x02@\x03" +
		"\x02\x02\x02\x03B\x03\x02\x02\x02\x03D\x03\x02\x02\x02\x03F\x03\x02\x02" +
		"\x02\x03H\x03\x02\x02\x02\x03J\x03\x02\x02\x02\x04N\x03\x02\x02\x02\x06" +
		"R\x03\x02\x02\x02\bV\x03\x02\x02\x02\n[\x03\x02\x02\x02\f`\x03\x02\x02" +
		"\x02\x0Ef\x03\x02\x02\x02\x10l\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14" +
		"z\x03\x02\x02\x02\x16\x82\x03\x02\x02\x02\x18\x8A\x03\x02\x02\x02\x1A" +
		"\x8E\x03\x02\x02\x02\x1C\x90\x03\x02\x02\x02\x1E\x94\x03\x02\x02\x02 " +
		"\x96\x03\x02\x02\x02\"\x98\x03\x02\x02\x02$\xA2\x03\x02\x02\x02&\xAC\x03" +
		"\x02\x02\x02(\xB2\x03\x02\x02\x02*\xB8\x03\x02\x02\x02,\xBA\x03\x02\x02" +
		"\x02.\xBD\x03\x02\x02\x020\xC2\x03\x02\x02\x022\xD5\x03\x02\x02\x024\xD7" +
		"\x03\x02\x02\x026\xD9\x03\x02\x02\x028\xDB\x03\x02\x02\x02:\xDD\x03\x02" +
		"\x02\x02<\xDF\x03\x02\x02\x02>\xE1\x03\x02\x02\x02@\xE4\x03\x02\x02\x02" +
		"B\xEC\x03\x02\x02\x02D\xF0\x03\x02\x02\x02F\xF4\x03\x02\x02\x02H\xF8\x03" +
		"\x02\x02\x02J\xFB\x03\x02\x02\x02L\u0101\x03\x02\x02\x02NO\x07\uFF07\x02" +
		"\x02OP\x03\x02\x02\x02PQ\b\x02\x02\x02Q\x05\x03\x02\x02\x02RS\x07\f\x02" +
		"\x02ST\x07\uFF07\x02\x02TU\x07\f\x02\x02U\x07\x03\x02\x02\x02VW\x07\uFF07" +
		"\x02\x02WX\x07\uFF07\x02\x02XY\x03\x02\x02\x02YZ\b\x04\x02\x02Z\t\x03" +
		"\x02\x02\x02[\\\x07\f\x02\x02\\]\x07\uFF07\x02\x02]^\x07\uFF07\x02\x02" +
		"^_\x07\f\x02\x02_\v\x03\x02\x02\x02`a\x07\uFF07\x02\x02ab\x07\uFF07\x02" +
		"\x02bc\x07\uFF07\x02\x02cd\x03\x02\x02\x02de\b\x06\x02\x02e\r\x03\x02" +
		"\x02\x02fg\x07\f\x02\x02gh\x07\uFF07\x02\x02hi\x07\uFF07\x02\x02ij\x07" +
		"\uFF07\x02\x02jk\x07\f\x02\x02k\x0F\x03\x02\x02\x02lm\x07\uFF07\x02\x02" +
		"mn\x07\uFF07\x02\x02no\x07\uFF07\x02\x02op\x07\uFF07\x02\x02pq\x03\x02" +
		"\x02\x02qr\b\b\x02\x02r\x11\x03\x02\x02\x02st\x07\f\x02\x02tu\x07\uFF07" +
		"\x02\x02uv\x07\uFF07\x02\x02vw\x07\uFF07\x02\x02wx\x07\uFF07\x02\x02x" +
		"y\x07\f\x02\x02y\x13\x03\x02\x02\x02z{\x07\uFF07\x02\x02{|\x07\uFF07\x02" +
		"\x02|}\x07\uFF07\x02\x02}~\x07\uFF07\x02\x02~\x7F\x07\uFF07\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x81\b\n\x02\x02\x81\x15\x03\x02\x02\x02\x82\x83" +
		"\x07\f\x02\x02\x83\x84\x07\uFF07\x02\x02\x84\x85\x07\uFF07\x02\x02\x85" +
		"\x86\x07\uFF07\x02\x02\x86\x87\x07\uFF07\x02\x02\x87\x88\x07\uFF07\x02" +
		"\x02\x88\x89\x07\f\x02\x02\x89\x17\x03\x02\x02\x02\x8A\x8B\x07\uFF1E\x02" +
		"\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\b\f\x02\x02\x8D\x19\x03\x02\x02\x02" +
		"\x8E\x8F\x07\uFF20\x02\x02\x8F\x1B\x03\x02\x02\x02\x90\x91\x07\u300C\x02" +
		"\x02\x91\x92\x03\x02\x02\x02\x92\x93\b\x0E\x02\x02\x93\x1D\x03\x02\x02" +
		"\x02\x94\x95\x07\u300D\x02\x02\x95\x1F\x03\x02\x02\x02\x96\x97\x07\uFF5E" +
		"\x02\x02\x97!\x03\x02\x02\x02\x98\x9C\x07\uFF0A\x02\x02\x99\x9D\x052\x19" +
		"\x02\x9A\x9D\x050\x18\x02\x9B\x9D\x05:\x1D\x02\x9C\x99\x03\x02\x02\x02" +
		"\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02" +
		"\xA0\xA1\x07\uFF0B\x02\x02\xA1#\x03\x02\x02\x02\xA2\xA6\x07\u3012\x02" +
		"\x02\xA3\xA7\x052\x19\x02\xA4\xA7\x050\x18\x02\xA5\xA7\x05:\x1D\x02\xA6" +
		"\xA3\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9" +
		"\xAA\x03\x02\x02\x02\xAA\xAB\x07\u3013\x02\x02\xAB%\x03\x02\x02\x02\xAC" +
		"\xAE\x07\uFF41\x02\x02\xAD\xAF\t\x02\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF" +
		"\xB0\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
		"\'\x03\x02\x02\x02\xB2\xB4\x07\uFFE5\x02\x02\xB3\xB5\x052\x19\x02\xB4" +
		"\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6" +
		"\xB7\x03\x02\x02\x02\xB7)\x03\x02\x02\x02\xB8\xB9\x07\u25A2\x02\x02\xB9" +
		"+\x03\x02\x02\x02\xBA\xBB\x07\u25A3\x02\x02\xBB-\x03\x02\x02\x02\xBC\xBE" +
		"\x05:\x1D\x02\xBD\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xBD" +
		"\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0/\x03\x02\x02\x02\xC1\xC3" +
		"\x05<\x1E\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2" +
		"\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC51\x03\x02\x02\x02\xC6\xC8" +
		"\x054\x1A\x02\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xC7" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xD6\x03\x02\x02\x02\xCB\xCD" +
		"\x056\x1B\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD6\x03\x02\x02\x02\xD0\xD2" +
		"\x058\x1C\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xC7" +
		"\x03\x02\x02\x02\xD5\xCC\x03\x02\x02\x02\xD5\xD1\x03\x02\x02\x02\xD63" +
		"\x03\x02\x02\x02\xD7\xD8\t\x03\x02\x02\xD85\x03\x02\x02\x02\xD9\xDA\t" +
		"\x04\x02\x02\xDA7\x03\x02\x02\x02\xDB\xDC\t\x05\x02\x02\xDC9\x03\x02\x02" +
		"\x02\xDD\xDE\n\x06\x02\x02\xDE;\x03\x02\x02\x02\xDF\xE0\t\x07\x02\x02" +
		"\xE0=\x03\x02\x02\x02\xE1\xE2\x07\f\x02\x02\xE2?\x03\x02\x02\x02\xE3\xE5" +
		"\t\b\x02\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE4\x03" +
		"\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9\b" +
		" \x03\x02\xE9A\x03\x02\x02\x02\xEA\xED\x052\x19\x02\xEB\xED\x05<\x1E\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEFC\x03\x02\x02\x02" +
		"\xF0\xF1\x07\uFF1C\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\b\"\x04\x02" +
		"\xF3E\x03\x02\x02\x02\xF4\xF5\x07\f\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
		"\xF7\b#\x04\x02\xF7G\x03\x02\x02\x02\xF8\xF9\t\t\x02\x02\xF9\xFA\x05L" +
		"&\x02\xFAI\x03\x02\x02\x02\xFB\xFC\t\n\x02\x02\xFC\xFD\x05L&\x02\xFDK" +
		"\x03\x02\x02\x02\xFE\u0102\x052\x19\x02\xFF\u0102\x050\x18\x02\u0100\u0102" +
		"\t\v\x02\x02\u0101\xFE\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101" +
		"\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0101\x03\x02" +
		"\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104M\x03\x02\x02\x02\x15\x02\x03" +
		"\x9C\x9E\xA6\xA8\xB0\xB6\xBF\xC4\xC9\xCE\xD3\xD5\xE6\xEC\xEE\u0101\u0103" +
		"\x05\x07\x03\x02\b\x02\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KojiLexer.__ATN) {
			KojiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KojiLexer._serializedATN));
		}

		return KojiLexer.__ATN;
	}

}

