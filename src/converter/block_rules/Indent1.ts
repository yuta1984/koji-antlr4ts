import { ConversionRule } from '../KojiConverter';

const Indent1: ConversionRule = {
	elemName: '字下げ一',
	type: 'block',
	doc: '一文字分字下げがある箇所を囲むブロックです',
	example: '％字下げ一\nこの部分が字下げされます\n％',
	textTemplate: '{{$1}}',
	htmlTemplate: `<div {{{$htmlId}}} class="Indent1 {{$classes}}">{{{$1}}}</div>`,
	xmlTemplate: `<div rend="indent(-1)" {{{$xmlId}}} {{{$xmlSubtypes}}}>{{{$1}}}</div>`,
	docxTemplate: `<w:p>{{{$1}}}</w:p>`
};

export default Indent1;

// import { ConversionRule } from '../ConversionRule';
// import { KojiASTNode } from '../../KojiAstBuilder';

// export default class Indent1 extends ConversionRule {
// 	get elemName() {
// 		return '字下げ一';
// 	}

// 	toXML(node: KojiASTNode): string {
// 		const text = this.convertChildren(node.children);
// 		let idStr = '',
// 			classesStr = '';
// 		if (node.id) idStr = `xml:id='${node.id}'`;
// 		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
// 		return `<div rend="indent(-1)" ${idStr} ${classesStr}>${text}<div>`;
// 	}

// 	toText(node: KojiASTNode): string {
// 		const text = this.converter.convertChildren(node.children);
// 		return `${text}`;
// 	}

// 	toHTML(node: KojiASTNode) {
// 		const text = this.convertChildren(node.children);
// 		return `<div class="Indent1 block" >${text}</div>`;
// 	}
// }
