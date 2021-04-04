import { ConversionRule } from '../KojiConverter';

const BugHole: ConversionRule = {
	elemName: '虫損',
	type: 'inline',
	doc: '虫損により判読できない箇所を示します。□の数で判読できない文字の数を表します。',
	example: '虫損した□文字',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$text}}',
	htmlTemplate: `<span {{{$htmlId}}} class="BugHole {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<gap {{{$xmlId}}} {{{$xmlSubtypes}}}" quantity="{{$text.length}}" unit="chars" reason="wormhole"/>`,
	docxTemplate: `<w:r><w:t>{{{$$1}}}</w:t></w:r>`,
	latexTemplate: '{{$text}}'
};

export default BugHole;

// import { ConversionRule } from '../ConversionRule';
// import { KojiASTNode } from '../../KojiAstBuilder';

// export default class BugHole extends ConversionRule {
// 	get elemName() {
// 		return '虫損';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `<gap quantity="${text.length}" unit="chars" reason="wormhole"/>`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `${text}`;
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<span class="BugHole inline" >${text}</span>`;
// 	}
// }
