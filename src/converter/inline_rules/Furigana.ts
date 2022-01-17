import { ConversionRule } from '../KojiConverter';
const Furigana: ConversionRule = {
	elemName: '振り仮名',
	type: 'inline',
	doc: '振り仮名を挿入します。"｜"でかなを区切ると、両側ルビのように左右にかなが表示されます。漢文の再読文字もこの方式で入力します。',
	example: '未（いまだ｜ズ）',
	minContentCount: 2,
	maxContentCount: 3,
	textTemplate: '{{$text}}',
	htmlTemplate: `
	<ruby class="Furigana {{$classes}}" {{{$htmlId}}} >
		{{{$1}}}
		<rt class="furigana-right">{{{$2}}}</rt>
		{{#$3}}
		<rtc class="furigana-left">{{{$3}}}</rtc>
		{{/$3}}
	</ruby>
	`,
	xmlTemplate: `
	<ruby>
		{{#$3}}
        <rb>		
			<ruby>
            	<rb>{{{$1}}}</rb>
        		<rt>{{{$2}}}</rt>
        	</ruby>
		</rb>
        <rt>{{{$3}}}</rt>
		{{/$3}}
		{{^$3}}
            <rb>{{{$1}}}</rb>
        	<rt>{{{$2}}}</rt>        	
		{{/$3}}
    </ruby>
	`,
	docxTemplate: `
			<w:r>
                <w:fldChar w:fldCharType="begin"/>
            </w:r>
            <w:r>
                <w:instrText xml:space="preserve"></w:instrText>
            </w:r>
            <w:r>
                <w:rPr>
                    <w:rFonts w:hint="eastAsia"/>
                </w:rPr>
                <w:instrText>eq \\o\\ad(\\s\\up 9(</w:instrText>
            </w:r>
			<w:r>
                <w:rPr>
					<w:rFonts w:hint="eastAsia"/>
                    <w:sz w:val="10"/>
                </w:rPr>
                <w:instrText>{{{$$2}}}</w:instrText>
            </w:r>
			{{#$3}}
			<w:r>
                <w:rPr>
                    <w:rFonts w:hint="eastAsia"/>
                </w:rPr>
                <w:instrText>),\\s\\do 9(</w:instrText>
            </w:r>
			<w:r>
                <w:rPr>
					<w:rFonts w:hint="eastAsia"/>
                    <w:sz w:val="10"/>
                </w:rPr>
                <w:instrText>{{{$$3}}}</w:instrText>
            </w:r>
			{{/$3}}
			<w:r>
                <w:rPr>
                    <w:rFonts w:hint="eastAsia"/>
                </w:rPr>
                <w:instrText>),{{{$$1}}})</w:instrText>
            </w:r>
            <w:r>
                <w:fldChar w:fldCharType="end"/>
            </w:r>
	`,
	latexTemplate: '{{#$3}}\\HidariNakaTn{ {{/$3}}\\MigiNakaTn{ {{{$1}}} }{ {{{$2}}} }{{#$3}} }{ {{{$3}}} }{{/$3}}'
};

export default Furigana;

// 	toXML(node: KojiASTNode): string {
// 		// see https://github.com/TEI-EAJ/jp_guidelines/wiki/%E3%83%AB%E3%83%93
// 		const text = this.converter.convertChildren(node.children);
// 		const right = this.converter.convertChildren(node.extra[0]);
// 		if (node.extra[1]) {
// 			const left = this.converter.convertChildren(node.extra[1]);
// 			return `<span type="ruby">
//                      <span type="rb" >${text}</span>
//                      <span type="rt" rend="right">${right}</span>
//                      <span type="rt" rend="left">${left}</span>
//                    </span>`;
// 		} else {
// 			return `<span type="ruby">
//                      <span type="rb">${text}</span>
//                      <span type="rt" rend="right">${right}</span>
//                    </span>`;
// 		}
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		const right = this.converter.convertChildren(node.extra[0]);
// 		if (node.extra[1]) {
// 			const left = this.converter.convertChildren(node.extra[1]);
// 			return `${text}（${right}｜${left}）`;
// 		} else {
// 			return `${text}（${right}）`;
// 		}
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.converter.convertChildren(node.children);
// 		const right = this.converter.convertChildren(node.extra[0]);
// 		if (node.extra[1]) {
// 			const left = this.converter.convertChildren(node.extra[1]);
// 			return `
//             <ruby class="Furigana">
//                 ${text}<rt class="right">${right}</rt>
//                 <rt class="left">${left}</rt>
//             </ruby>
//           `;
// 		} else {
// 			return `
//             <ruby class="Furigana">
//                 ${text}<rt>${right}</rt>
//             </ruby>
//           `;
// 		}
// 	}
// }
