import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Person extends KojiElement {
	get elemName() {
		return '日時';
	}

	toXML(node: KojiASTNode): string {
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		const children = this.convertChildren(node.children);
		return `<date ${idStr} ${classesStr}>${children}</date>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Date inline" >${text}</span>`;
	}
}
