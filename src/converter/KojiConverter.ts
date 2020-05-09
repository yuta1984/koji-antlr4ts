import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';

export interface KojiConverter {
	convert(ast: KojiDocumentNode): string;
	convertChildren(children: Array<KojiASTNode | string>): string;
	convertInline(node: KojiInlineNode): string;
	convertBlock(node: KojiBlockNode): string;
}
