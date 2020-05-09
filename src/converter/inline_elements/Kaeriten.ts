import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Kaeriten extends KojiElement {
	get elemName() {
		return '返り点';
	}

	toXML(node: KojiASTNode): string {
		// see https://www.jstage.jst.go.jp/article/jsik/28/2/28_2018_017/_pdf
		const text = this.convertChildren(node.children);
		return `<span type="kaeriten" >${text}</span>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `＿${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Kaeriten inline" >${text}</span>`;
	}
}
