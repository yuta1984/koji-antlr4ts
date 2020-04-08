import { KojiElement } from "../KojiElement"; import { KojiASTNode } from "../../KojiAstBuilder";

export class Title extends KojiElement {
    get elemName() {
        return "題";
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
        return `<h1 class="Title inline" >${text}</h1>`;
    }
}
