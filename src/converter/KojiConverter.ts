import { KojiASTNode, KojiBlockNode, KojiInlineNode } from '../KojiAstBuilder';

export interface KojiConverter {
	convert(ast: KojiASTNode): string;
	convertChildren(children: Array<KojiASTNode | string>): string;
	convertInline(node: KojiInlineNode): string;
	convertBlock(node: KojiBlockNode): string;
}
