import { ConversionRule } from '../KojiConverter';

const Annotation: ConversionRule = {
	elemName: '注釈',
	type: 'inline',
	doc: '翻刻時の疑問点などの注釈情報をタグ付けします。',
	example: '【このようにして注釈を書きます】',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$text}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Annotation {{$classes}}">【{{{$1}}}】</span>`,
	xmlTemplate: `<!-- {{$1}} -->`
};

export default Annotation;

// import { KojiASTNode } from '../../KojiAstBuilder';
// import { ConversionRule } from '../ConversionRule';

// export default class Annotation extends ConversionRule {
// 	get elemName() {
// 		return '注釈';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		const children = this.convertChildren(node.children);
// 		return `<!-- ${children} -->`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `【${text}】`;
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<span class="Annotation inline" >【${text}】</span>`;
// 	}
// }
