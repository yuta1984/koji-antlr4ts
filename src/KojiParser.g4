parser grammar KojiParser;

options {
	tokenVocab = KojiLexer;
}
// character
koji: list* EOF;

list: block | inline | syntaxSugar | textSegment | Lb;

inline:
	'《' ElemName ID? Class* '：' content += inlineContent* (
		Bar extra += inlineContentSeq
	)* '》';

inlineContentSeq: inlineContent*;

inlineContent: (syntaxSugar | textSegment | inline | Lb);

// block
block: block1 | block2 | block3 | block4 | block5;

block1:
	OpenBlock1 ElemName ID? Class* HeaderLb content += blockContent1* CloseBlock1?;
blockContent1:
	syntaxSugar
	| textSegment
	| inline
	| Lb
	| block2
	| block3
	| block4
	| block5;
block2:
	OpenBlock2 ElemName ID? Class* HeaderLb content += blockContent2* CloseBlock2?;
blockContent2:
	syntaxSugar
	| textSegment
	| inline
	| Lb
	| block3
	| block4
	| block5;
block3:
	OpenBlock3 ElemName ID? Class* HeaderLb content += blockContent3* CloseBlock3?;
blockContent3:
	syntaxSugar
	| textSegment
	| inline
	| Lb
	| block4
	| block5;
block4:
	OpenBlock4 ElemName ID? Class* HeaderLb content += blockContent4* CloseBlock4?;
blockContent4: syntaxSugar | textSegment | inline | Lb | block5;
block5:
	OpenBlock5 ElemName ID? Class* HeaderLb content += blockContent5* CloseBlock5?;
blockContent5: syntaxSugar | textSegment | inline | Lb;

textSegment: (Kanji | Kana | NonJp)+;

syntaxSugar:
	furigana
	| kaeriten
	| okurigana
	| annotation
	| illegible
	| bugHole
	| person
	| place
	| date;

furigana: (target = Kanji | target = Kana | target = NonJp) 
FuriganaOpen left = FuriganaContent (FuriganaSep right = FuriganaContent)? FuriganaClose;
kaeriten: KaeritenMark content = KaeritenChar+;
okurigana: OkuriganaMark content = Kana;
annotation: AnnotationOpen content = textSegment AnnotationClose;
illegible: Illegible+;
bugHole: BugHole+;
person: PersonOpen inlineContent PersonClose;
place: PlaceOpen inlineContent PlaceClose;
date: DateOpen inlineContent DateClose;