import { KojiElement } from '../KojiElement';
import { KojiASTNode, KojiBlockNode } from '../../KojiAstBuilder';

export default class Cover extends KojiElement {
	get elemName() {
		return '表紙';
	}

	toXML(node: KojiASTNode): string {
		const text = this.convertChildren(node.children);
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		return `<titlePage ${idStr} ${classesStr}>${text}</titlePage>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiBlockNode) {
		const text = this.convertChildren(node.children);
		return `<div class="block block${node.level} Cover" >${text}</div>`;
	}
}
