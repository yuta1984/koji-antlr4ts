parser grammar KojiParser;

options {
	tokenVocab = KojiLexer;
}
// character
koji: list* EOF;

list: block | inline | syntaxSugar | textSegment | Lb;

inline:
	'《' ElemName ID? Class* '：' content += inlineContentSeq (
		Bar content += inlineContentSeq
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

postPositionedAttrs:
	AttrsOpen ID? Class* AttrsClose;

syntaxSugar:
	furigana
	| kaeriten
	| okurigana
	| tateten
	| annotation
	| illegible
	| bugHole
	| person
	| place
	| date;

furiganaTarget: Kanji | Kana | NonJp | annotation | illegible | bugHole;
furigana: FuriganaPre? (target = furiganaTarget)
FuriganaOpen right = FuriganaContent (FuriganaSep left = FuriganaContent)? FuriganaClose;
kaeriten: KaeritenMark content = KaeritenChar+;
okurigana: OkuriganaMark content = Kana;
tateten: TatetenChar;
annotation: AnnotationOpen content = AnnotationContent ( AnnotationClose | EOF );
illegible: IllegibleMark+;
bugHole: BugHoleMark+;
person: PersonOpen content += inlineContent+ PersonClose postPositionedAttrs?;
place: PlaceOpen content += inlineContent+ PlaceClose postPositionedAttrs?;
date: DateOpen content += inlineContent+ DateClose postPositionedAttrs?;