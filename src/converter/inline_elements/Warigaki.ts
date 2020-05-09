import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Warigaki extends KojiElement {
	get elemName() {
		return '割書';
	}

	toXML(node: KojiASTNode): string {
		const right = this.converter.convertChildren(node.children);
		let left = '';
		if (node.extra[0]) left = this.converter.convertChildren(node.extra[0]);
		return `
      <span type="warigaki">
        <span rend="left">${left}</span>
        <span rend="right">${right}</span>                
      </span>`;
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		const kana = this.converter.convertChildren(node.extra[0]);
		return `《割書：${text}｜${kana}》`;
	}

	toHTML(node: KojiASTNode) {
		const right = this.converter.convertChildren(node.children);
		let left = '';
		if (node.extra[0]) left = this.converter.convertChildren(node.extra[0]);
		return `
      <span class="Warigaki">
        <span class="warigaki-left">${left}</span>
        <span class="warigaki-right">${right}</span>                
      </span>`;
	}
}
