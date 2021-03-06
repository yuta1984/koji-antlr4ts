import { ConversionRule } from '../KojiConverter';

const Illegible: ConversionRule = {
	elemName: '難読',
	type: 'inline',
	doc: '文中の難読文字をマークアップします。',
	example: '読めない■■文字',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$text}}',
	htmlTemplate: `<span {{{$htmlId}}} class="illegible {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<gap {{{$xmlId}}} {{{$xmlSubtypes}}} quantity="{{$text.length}}" unit="chars" reason="illegible"/>`,
	docxTemplate: `<w:r><w:t>{{{$$1}}}</w:t></w:r>`,
	latexTemplate: '{{$text}}'
};

export default Illegible;

// export default class Illegible extends ConversionRule {
// 	get elemName() {
// 		return '難読';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `<gap quantity="${text.length}" unit="chars" reason="illegible"/>`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `${text}`;
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<span class="Illegible inline" >${text}</span>`;
// 	}
// }
