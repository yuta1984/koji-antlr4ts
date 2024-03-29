import { ConversionRule } from '../KojiConverter';
const Okurigana: ConversionRule = {
	elemName: '送り仮名',
	type: 'inline',
	doc: '漢文の送り仮名をマークアップします。',
	example: '￣オクリガナ',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '￣{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Okurigana {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<note type="okuri">{{{$1}}}</note>`,
	docxTemplate: `
			<w:r>
        		<w:rPr>
                    <w:rFonts w:hint="eastAsia"/>
                    <w:vertAlign w:val="superscript"/>
                </w:rPr>
                <w:t>{{{$$1}}}</w:t>
            </w:r>
	`,
	latexTemplate: '\\kokana{ {{{$1}}} }{}'
};

export default Okurigana;

// import { KojiASTNode } from '../../KojiAstBuilder';

// export default class Okurigana extends ConversionRule {
// 	get elemName() {
// 		return '送り仮名';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		// see https://www.jstage.jst.go.jp/article/jsik/28/2/28_2018_017/_pdf
// 		const text = this.convertChildren(node.children);
// 		return `<span type="okurigana" >${text}</span>`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `￣${text}`;
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<span class="Okurigana inline" >${text}</span>`;
// 	}
// }
