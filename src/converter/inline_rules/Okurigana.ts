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
	xmlTemplate: `<span type="okurigana" {{{$xmlId}}} {{{$xmlSubtypes}}}>{{{$1}}}</span>`
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
