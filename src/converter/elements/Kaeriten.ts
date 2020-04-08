import { KojiElement } from "../KojiElement";
import { KojiASTNode } from "../../KojiAstBuilder";

export class Kaeriten extends KojiElement {
    get elemName() {
        return "返り点";
    }

    toTEI(node: KojiASTNode): string {
        throw new Error("Method not implemented.");
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