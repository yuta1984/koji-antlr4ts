import { KojiElement } from "../KojiElement";
import { KojiASTNode } from "../../KojiAstBuilder";

export class Furigana extends KojiElement {
    get elemName() {
        return "振り仮名";
    }

    toTEI(node: KojiASTNode): string {
        throw new Error("Method not implemented.");
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
