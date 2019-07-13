import { KojiASTNode } from "../KojiAstBuilder";

export interface KojiConverter {
  convert(ast: KojiASTNode): string;
  convertChildren(children: Array<KojiASTNode | string>): string;
  convertInline(node: KojiASTNode): string;
  convertBlock(node: KojiASTNode): string;
}
