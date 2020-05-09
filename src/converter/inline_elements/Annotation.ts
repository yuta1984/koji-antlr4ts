import { KojiASTNode } from '../../KojiAstBuilder';
import { KojiElement } from '../KojiElement';

export default class Annotation extends KojiElement {
	get elemName() {
		return '注釈';
	}

	toXML(node: KojiASTNode): string {
		const children = this.convertChildren(node.children);
		return `<!-- ${children} -->`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `【${text}】`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Annotation inline" >【${text}】</span>`;
	}
}
