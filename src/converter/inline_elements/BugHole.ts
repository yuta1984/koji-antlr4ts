import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class BugHole extends KojiElement {
	get elemName() {
		return '虫損';
	}

	toXML(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `<gap quantity="${text.length}" unit="chars" reason="wormhole"/>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="BugHole inline" >${text}</span>`;
	}
}
