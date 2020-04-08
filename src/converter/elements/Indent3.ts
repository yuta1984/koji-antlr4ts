import { KojiElement } from "../KojiElement";
import { KojiASTNode } from "../../KojiAstBuilder";

export class Indent3 extends KojiElement {
    get elemName() {
        return "字下げ三";
    }

    toTEI(node: KojiASTNode): string {
        throw new Error("Method not implemented.");
    }

    toText(node: KojiASTNode): string {
        const text = this.converter.convertChildren(node.children);
        return `${text}`;
    }

    toHTML(node: KojiASTNode) {
        const text = this.convertChildren(node.children);
        return `<div class="Indent3 block" >${text}</div>`;
    }
}
