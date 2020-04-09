import { KojiElement } from "../KojiElement"; import { KojiASTNode } from "../../KojiAstBuilder";


export default class Cover extends KojiElement {
    get elemName() {
        return "表紙";
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
        return `<div class="block block${node.level} Cover" >${text}</span>`;
    }
}