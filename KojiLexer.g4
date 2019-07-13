lexer grammar KojiLexer;

// block elemnt
OpenBlock1: '％' -> pushMode(HEADER);
CloseBlock1: '\n％\n';

OpenBlock2: '％％' -> pushMode(HEADER);
CloseBlock2: '\n％％\n';

OpenBlock3: '％％％' -> pushMode(HEADER);
CloseBlock3: '\n％％％\n';

OpenBlock4: '％％％％' -> pushMode(HEADER);
CloseBlock4: '\n％％％％\n';

OpenBlock5: '％％％％％' -> pushMode(HEADER);
CloseBlock5: '\n％％％％％\n';

// inline element
OpenInline: '＜' -> pushMode(HEADER);
CloseInline: '＞';
OpenInline2: '《' -> pushMode(HEADER);
CloseInline2: '》';
Bar: '｜';

// syntax sugars
FuriganaParen: '（' (Kana | Kanji | NonJpChar)+ '）';
AnnotationParen: '【' (Kana | Kanji | NonJpChar)+ '】';
Kaeriten: '＿' [レ一二三上中下甲乙丙点]+;
Okurigana: '￣' Kana+;
Illegible: '■';
BugHole: '□';

// text segments
NonJp: NonJpChar+;
Kanji: KanjiChar+;
Kana: HiraganaChar+ | KatakanaChar+ | HentaikanaChar+;
fragment HiraganaChar: [\u3040-\u309F];
fragment KatakanaChar: [\u30A0-\u30FF\u31F0-\u31FF];
fragment HentaikanaChar: [\u1B000-\u1B000\u1B100-\u1B12F];
NonJpChar:
	~[\n｜（）＜＞《》【】％□◼\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FEA\u3400-\u4DFF];
KanjiChar:
	[\u3000-\u3007\u4E00-\u9FEA\u3400-\u4DFF\u20000-\u2A6FF\u2A700-\u2B734\u2B740-\u2B81F\u2B820-\u2CEAF\u2CEB0-\u2EBE0]
		;
Lb: '\n';
WS: [ \t]+ -> skip;

// everything in a tag header
mode HEADER;
ElemName: (Kana | KanjiChar)+;
Colon: '：' -> popMode;
HeaderLb: '\n' -> popMode;
ID: ('#' | '＃') AttrName;
Class: ('*' | '＊' | '.') AttrName;
fragment AttrName: (Kana | Kanji | [:a-zA-Z] | [0-9])+;
