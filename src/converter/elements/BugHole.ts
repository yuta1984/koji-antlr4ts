import { KojiElement } from "../KojiElement"; import { KojiASTNode } from "../../KojiAstBuilder";


export class BugHole extends KojiElement {
    get elemName() {
        return "虫損";
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
        return `<span class="BugHole inline" >${text}</span>`;
    }
}