import { KojiASTNode } from "../KojiAstBuilder";
import { KojiConverter } from "./KojiConverter";
export declare abstract class KojiElement {
    static elemName: string;
    node: KojiASTNode;
    converter: KojiConverter;
    constructor(converter: KojiConverter);
    abstract readonly elemName: string;
    abstract toHTML(node: KojiASTNode): string;
    abstract toTEI(node: KojiASTNode): string;
    abstract toText(node: KojiASTNode): string;
    convertChildren(children: Array<KojiASTNode | string>): string;
    toPDF(node: KojiASTNode): string;
    toEPUB(node: KojiASTNode): string;
    toMSWord(node: KojiASTNode): string;
}
export declare class Furigana extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Warigaki extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Kaeriten extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Okurigana extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Annotation extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Illegible extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class BugHole extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Title extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Indent1 extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Indent2 extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
export declare class Indent3 extends KojiElement {
    readonly elemName: string;
    toTEI(node: KojiASTNode): string;
    toText(node: KojiASTNode): string;
    toHTML(node: KojiASTNode): string;
}
