import { KojiASTNode } from "../KojiAstBuilder";
import { KojiConverter } from "./KojiConverter";

export abstract class KojiElement {
  node: KojiASTNode;
  converter: KojiConverter;
  constructor(converter: KojiConverter) {
    this.converter = converter;
  }
  abstract get elemName(): string;
  abstract toHTML(node: KojiASTNode): string;
  abstract toXML(node: KojiASTNode): string;
  abstract toText(node: KojiASTNode): string;

  convertChildren(children: Array<KojiASTNode | string>) {
    return this.converter.convertChildren(children);
  }
}
