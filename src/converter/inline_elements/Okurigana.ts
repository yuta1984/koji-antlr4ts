import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Okurigana extends KojiElement {
	get elemName() {
		return '送り仮名';
	}

	toXML(node: KojiASTNode): string {
		// see https://www.jstage.jst.go.jp/article/jsik/28/2/28_2018_017/_pdf
		const text = this.convertChildren(node.children);
		return `<span type="okurigana" >${text}</span>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		return `￣${text}`;
	}

	toHTML(node: KojiASTNode) {
		const text = this.convertChildren(node.children);
		return `<span class="Okurigana inline" >${text}</span>`;
	}
}
