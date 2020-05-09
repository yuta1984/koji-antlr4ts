import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Illegible extends KojiElement {
	get elemName() {
		return '難読';
	}

	toXML(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `<gap quantity="${text.length}" unit="chars" reason="illegible"/>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Illegible inline" >${text}</span>`;
	}
}
