import { ConversionRule } from '../KojiConverter';

const Cover: ConversionRule = {
	elemName: '表紙',
	type: 'block',
	doc: '書籍の表紙部分を囲むブロックです',
	example: '％表紙\n《題：地震年代記》\n％',
	textTemplate: '{{$1}}',
	htmlTemplate: `<div {{$htmlId}} class="Cover {{$classes}}">{{$1}}</div>`,
	xmlTemplate: `<titlePage {{$xmlId}} {{$xmlSubtypes}}>$1</titlePage>`
};

export default Cover;

// import { ConversionRule } from '../ConversionRule';
// import { KojiASTNode, KojiBlockNode } from '../../KojiAstBuilder';

// export default class Cover extends ConversionRule {
// 	get elemName() {
// 		return '表紙';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		const text = this.convertChildren(node.children);
// 		let idStr = '',
// 			classesStr = '';
// 		if (node.id) idStr = `xml:id='${node.id}'`;
// 		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
// 		return `<titlePage ${idStr} ${classesStr}>${text}</titlePage>`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `${text}`;
// 	}

// 	toHTML(node: KojiBlockNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<div class="block block${node.level} Cover" >${text}</div>`;
// 	}
// }
