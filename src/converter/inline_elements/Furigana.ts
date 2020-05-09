import { KojiElement } from '../KojiElement';
import { KojiASTNode } from '../../KojiAstBuilder';

export default class Furigana extends KojiElement {
	get elemName() {
		return '振り仮名';
	}

	toXML(node: KojiASTNode): string {
		// see https://github.com/TEI-EAJ/jp_guidelines/wiki/%E3%83%AB%E3%83%93
		const text = this.converter.convertChildren(node.children);
		const right = this.converter.convertChildren(node.extra[0]);
		if (node.extra[1]) {
			const left = this.converter.convertChildren(node.extra[1]);
			return `<span type="ruby">
                     <span type="rb" >${text}</span>
                     <span type="rt" rend="right">${right}</span>
                     <span type="rt" rend="left">${left}</span>
                   </span>`;
		} else {
			return `<span type="ruby">
                     <span type="rb">${text}</span>
                     <span type="rt" rend="right">${right}</span>
                   </span>`;
		}
	}

	toText(node: KojiASTNode): string {
		const text = this.converter.convertChildren(node.children);
		const right = this.converter.convertChildren(node.extra[0]);
		if (node.extra[1]) {
			const left = this.converter.convertChildren(node.extra[1]);
			return `${text}（${right}｜${left}）`;
		} else {
			return `${text}（${right}）`;
		}
	}

	toHTML(node: KojiASTNode) {
		const text = this.converter.convertChildren(node.children);
		const right = this.converter.convertChildren(node.extra[0]);
		if (node.extra[1]) {
			const left = this.converter.convertChildren(node.extra[1]);
			return `
            <ruby class="Furigana">
                ${text}<rt class="right">${right}</rt>
                <rt class="left">${left}</rt>
            </ruby>
          `;
		} else {
			return `
            <ruby class="Furigana">
                ${text}<rt>${right}</rt>
            </ruby>
          `;
		}
	}
}
