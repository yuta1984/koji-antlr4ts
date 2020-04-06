import { KojiASTNode } from "../KojiAstBuilder";
import { KojiElement } from "./KojiElement";
import { KojiConverter } from "./KojiConverter";
declare type KojiElementClass = {
    new (c: KojiConverter): KojiElement;
};
export declare class KojiHTMLConverter implements KojiConverter {
    elementMap: {
        [str: string]: KojiElement;
    };
    elementClasses: Array<KojiElementClass>;
    constructor(elements?: Array<KojiElementClass>);
    convert(ast: KojiASTNode): string;
    convertChildren(children: Array<KojiASTNode | string>): string;
    convertInline(node: KojiASTNode): string;
    convertBlock(node: KojiASTNode): string;
}
export {};
