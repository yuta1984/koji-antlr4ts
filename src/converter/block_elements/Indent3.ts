import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Indent3 extends KojiElement {
	get elemName() {
		return '字下げ三';
	}

	toXML(node: KojiASTNode): string {
		const text = this.convertChildren(node.children);
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		return `<div rend="indent(-3)" ${idStr} ${classesStr}>${text}<div>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<div class="Indent3 block" >${text}</div>`;
	}
}
