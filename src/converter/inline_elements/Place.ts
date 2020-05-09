import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Person extends KojiElement {
	get elemName() {
		return '場所';
	}

	toXML(node: KojiASTNode): string {
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		const children = this.convertChildren(node.children);
		return `<placeName ${idStr} ${classesStr}>${children}</placeName>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Place inline" >${text}</span>`;
	}
}
