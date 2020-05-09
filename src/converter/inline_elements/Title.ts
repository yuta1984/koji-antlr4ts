import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Title extends KojiElement {
	get elemName() {
		return '題';
	}

	toXML(node: KojiASTNode): string {
		let idStr = '',
			classesStr = '';
		if (node.id) idStr = `xml:id='${node.id}'`;
		if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
		const children = this.convertChildren(node.children);
		return `<docTitle ${idStr} ${classesStr}>${children}</docTitle>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<h1 class="Title inline" >${text}</h1>`;
	}
}
