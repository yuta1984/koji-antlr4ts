import { KojiElement } from "../KojiElement";
import { KojiASTNode } from "../../KojiAstBuilder";

export default class Person extends KojiElement {
    get elemName() {
        return "日時";
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
        return `<span class="Date inline" >${text}</span>`;
    }
}