import { KojiElement } from "../KojiElement"; import { KojiASTNode } from "../../KojiAstBuilder";

export default class Indent2 extends KojiElement {
    get elemName() {
        return "字下げ二";
    }

    toXML(node: KojiASTNode): string {
        throw new Error("Method not implemented.");
    }

    toText(node: KojiASTNode): string {
        const text = this.converter.convertChildren(node.children);
        return `${text}`;
    }

    toHTML(node: KojiASTNode) {
        const text = this.convertChildren(node.children);
        return `<div class="Indent2 block" >${text}</div>`;
    }
}
