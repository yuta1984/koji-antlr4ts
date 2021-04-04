import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';

export interface ConversionRule {
	type: 'inline' | 'block';
	elemName: string;
	doc: string;
	example?: string;
	minContentCount?: number;
	maxContentCount?: number;
	textTemplate: string;
	htmlTemplate: string;
	xmlTemplate: string;
	docxTemplate?: string;
	latexTemplate?: string;
}

export interface KojiConverter {
	convert(ast: KojiDocumentNode): string;
	convertChildren(children: Array<Array<KojiASTNode | string>>): string[];
	convertInline(node: KojiInlineNode): string;
	convertBlock(node: KojiBlockNode): string;
}

export interface ConversionOptions {
	rules: ConversionRule[];
}

export function assertConversionRuleIsValid(rule: any): asserts rule is ConversionRule {
	if (!rule.type || ['inline', 'block'].indexOf(rule.type) === -1) {
		throw new Error("type property must be 'inline' or 'block'");
	}
	if (!rule.elemName || typeof rule.elemName !== "string") {
		throw new Error("elemName property must be string");
	}
	if (!rule.doc || typeof rule.doc !== "string") {
		throw new Error("doc property must be string");
	}
	if (!rule.textTemplate || typeof rule.textTemplate !== "string") {
		throw new Error("textTemplate property must be string");
	}
	if (!rule.htmlTemplate || typeof rule.htmlTemplate !== "string") {
		throw new Error("htmlTemplate property must be string");
	}
	if (!rule.xmlTemplate || typeof rule.xmlTemplate !== "string") {
		throw new Error("xmlTemplate property must be string");
	}
}