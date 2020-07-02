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
OpenInline: '《' -> pushMode(HEADER);
CloseInline: '》';
Bar: '｜';

// // syntax sugars
FuriganaPre: ('／' | '/');
FuriganaOpen: '（' -> pushMode(FURIGANA);
AnnotationOpen: '【' -> pushMode(ANNOTATION);

PersonOpen: '｛';
PersonClose: '｝';
PlaceOpen: '〔';
PlaceClose: '〕';
DateOpen: '＜';
DateClose: '＞';
AttrsOpen: '［' -> pushMode(HEADER);
KaeritenMark: '＿' -> pushMode(KAERITEN);
TatetenChar: [-‐ー―−];
OkuriganaMark: '￣';
IllegibleMark: '■';
BugHoleMark: '□';

// text segments
NonJp: NonJpChar+;
Kanji: KanjiChar+;
Kana: HiraganaChar+ | KatakanaChar+ | HentaikanaChar+;
fragment HiraganaChar: [\u3040-\u309F];
fragment KatakanaChar: [\u30A0-\u30FF\u31F0-\u31FF];
fragment HentaikanaChar: [\u1B000-\u1B000\u1B100-\u1B12F];
NonJpChar:
	~[\n｜（）《》＜＞【】｛｝〔〕［］％□■／/\--‐ー―−\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FEA\u3400-\u4DFF];
//~[\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FEA\u3400-\u4DFF];
KanjiChar:
	[\u2E80-\u2FDF\u3000-\u3007\u4E00-\u9FEA\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF];
Lb: '\n';
WS: [ \t]+ -> skip;

// everything in a tag header
mode HEADER;
ElemName: (Kana | KanjiChar)+;
Colon: '：' -> popMode;
HeaderLb: '\n' -> popMode;
AttrsClose: '］' -> popMode;
ID: ('#' | '＃') AttrName;
Class: ('*' | '＊' ) AttrName;
fragment AttrName: [A-z][A-z0-9\-_.]*;

mode FURIGANA;
FuriganaContent: (Kana | KanjiChar | NonJpChar)+;
FuriganaSep: '｜';
FuriganaClose: '）' -> popMode;

mode KAERITEN;
KaeritenChar: [レ一二三四五六七八九十上中下甲乙丙丁天地人]+ -> popMode;

mode ANNOTATION;
AnnotationContent: ~('\n' | '】')*;
AnnotationClose: '】' -> popMode;