import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';
import { KojiConverter, ConversionRule, ConversionOptions, assertConversionRuleIsValid } from './KojiConverter';
import inlineConversionRules from './inline_rules';
import blockConversionRules from './block_rules';
import * as Mustache from 'mustache';

export class KojiXMLConverter implements KojiConverter {
	inlineConversionRuleMap: { [str: string]: ConversionRule } = {};
	blockConversionRuleMap: { [str: string]: ConversionRule } = {};

	constructor(options?: ConversionOptions) {
		inlineConversionRules.forEach((rule) => {
			this.inlineConversionRuleMap[rule.elemName] = rule;
		});
		blockConversionRules.forEach((rule) => {
			this.blockConversionRuleMap[rule.elemName] = rule;
		});
		if (options && options.rules) {
			options.rules.forEach((rule) => {
				assertConversionRuleIsValid(rule);
				if (rule.type === 'inline') {
					this.inlineConversionRuleMap[rule.elemName] = rule;
				} else if (rule.type === 'block') {
					this.blockConversionRuleMap[rule.elemName] = rule;
				}
			});
		}
	}

	convert(ast: KojiDocumentNode) {
		const children = this.convertChildren([ ast.body ]);
		return `<text>${children.join('')}</text>`;
	}

	convertChildren(children: Array<Array<KojiASTNode | string>>): string[] {
		return children.map((content) => {
			return content
				.map((node) => {
					if (typeof node === 'string') {
						if (node === '\n') return '<lb/>';
						return node;
					} else if (this.isBlockNode(node)) {
						return this.convertBlock(node);
					} else if (this.isInlineNode(node)) {
						return this.convertInline(node);
					}
				})
				.join('');
		});
	}

	convertInline(node: KojiASTNode): string {
		if (this.inlineConversionRuleMap[node.name]) {
			const rule: ConversionRule = this.inlineConversionRuleMap[node.name];
			return Mustache.render(rule.xmlTemplate, this.buildMustacheVariables(node));
		} else {
			let idStr = '',
				classesStr = '';
			if (node.id) idStr = `id='${node.id}'`;
			if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
			const children = this.convertChildren(node.children).join('');
			return `<span ${idStr} ${classesStr}>${children}</span>`;
		}
	}

	convertBlock(node: KojiBlockNode): string {
		if (this.blockConversionRuleMap[node.name]) {
			const rule: ConversionRule = this.blockConversionRuleMap[node.name];
			return Mustache.render(rule.xmlTemplate, this.buildMustacheVariables(node));
		} else {
			let idStr = '',
				classesStr = '';
			if (node.id) idStr = `xml:id='${node.id}'`;
			if (node.classes) classesStr = `subtype='block ${node.classes.join(' ')}'`;
			const children = this.convertChildren(node.children).join('');
			return `<div ${idStr} ${classesStr}>${children}</div>`;
		}
	}

	private buildMustacheVariables(node: KojiASTNode) {
		const children = this.convertChildren(node.children);
		const vars = {};
		vars['$0'] = children;
		for (let i = 1; i < 10; i++) {
			if (children[i]) {
				vars[`$${i}`] = children[i];
			}
		}
		vars['$htmlId'] = node.id ? `id="${node.id}"` : '';
		vars['$classes'] = node.classes ? `${node.classes.join(' ')}` : '';
		vars['$xmlId'] = node.id ? `xml:id="${node.id}"` : '';
		vars['$xmlSubtypes'] = node.id ? `subtype="${node.classes.join(' ')}"` : '';
		return vars;
	}

	private isBlockNode(block: any): block is KojiBlockNode {
		return block.type === 'block';
	}

	private isInlineNode(block: any): block is KojiInlineNode {
		return block.type === 'inline';
	}
}
