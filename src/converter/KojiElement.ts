import { KojiASTNode } from "../KojiAstBuilder";
import { KojiConverter } from "./KojiConverter";

export abstract class KojiElement {
  static elemName: string;
  node: KojiASTNode;
  converter: KojiConverter;
  constructor(converter: KojiConverter) {
    this.converter = converter;
  }
  abstract get elemName(): string;
  abstract toHTML(node: KojiASTNode): string;
  abstract toTEI(node: KojiASTNode): string;
  abstract toText(node: KojiASTNode): string;

  convertChildren(children: Array<KojiASTNode | string>) {
    return this.converter.convertChildren(children);
  }

  toPDF(node: KojiASTNode): string {
    return this.toText(node);
  }

  toEPUB(node: KojiASTNode): string {
    return this.toText(node);
  }

  toMSWord(node: KojiASTNode): string {
    return this.toText(node);
  }
}










