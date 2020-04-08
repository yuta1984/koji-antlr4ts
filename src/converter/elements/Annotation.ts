import { KojiASTNode } from "../../KojiAstBuilder";
import { KojiElement } from "../KojiElement";

export class Annotation extends KojiElement {
    get elemName() {
        return "注釈";
    }

    toTEI(node: KojiASTNode): string {
        throw new Error("Method not implemented.");
    }

    toText(node: KojiASTNode): string {
        const text = this.converter.convertChildren(node.children);
        return `【${text}】`;
    }

    toHTML(node: KojiASTNode) {
        const text = this.convertChildren(node.children);
        return `<span class="Annotation inline" >${text}</span>`;
    }
}
