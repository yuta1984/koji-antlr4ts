import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Indent1 extends KojiElement {
	get elemName() {
		return '字下げ一';
	}

	toXML(node: KojiASTNode): string {
		const text = this.convertChildren(node.children);
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		return `<div rend="indent(-1)" ${idStr} ${classesStr}>${text}<div>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<div class="Indent1 block" >${text}</div>`;
	}
}
