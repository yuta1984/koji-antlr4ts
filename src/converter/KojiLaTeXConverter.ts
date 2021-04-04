import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';
import { KojiConverter, ConversionRule, ConversionOptions, assertConversionRuleIsValid } from './KojiConverter';
import inlineConversionRules from './inline_rules';
import blockConversionRules from './block_rules';
import * as Mustache from 'mustache';

export class KojiLaTeXConverter implements KojiConverter {
    inlineConversionRuleMap: { [str: string]: ConversionRule; } = {};
    blockConversionRuleMap: { [str: string]: ConversionRule; } = {};

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

    convert(ast: KojiDocumentNode): string {
        const children = this.convertChildren([ast.body]);
        return this.document(`${children.join('')}`);
    }

    convertChildren(children: Array<Array<KojiASTNode | string>>): string[] {
        return children.map((content) => {
            return content
                .map((node) => {
                    if (typeof node === 'string') {
                        if (node === '\n') return '\\\\\n';
                        return `${node}`;

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
            return Mustache.render(rule.latexTemplate, this.buildMustacheVariables(node));
        } else {
            const children = this.convertChildren(node.children).join('');
            return `${children}`;
        }
    }

    convertBlock(node: KojiBlockNode): string {
        const children = this.convertChildren(node.children).join('');
        return `${children}`;
    }

    private buildMustacheVariables(node: KojiASTNode) {
        const children = this.convertChildren(node.children);
        const vars = {};
        vars['$0'] = children;
        for (let i = 0; i < 10; i++) {
            if (children[i]) {
                vars[`$${i + 1}`] = children[i];
            }
        }
        return vars;
    }

    private isBlockNode(block: any): block is KojiBlockNode {
        return block.type === 'block';
    }

    private isInlineNode(block: any): block is KojiInlineNode {
        return block.type === 'inline';
    }

    private document(content: string): string {
        return `% みんなで翻刻テキストLaTeXエクスポート（試験版）
% 金水敏先生が公開するkunten2e.sty(http://www.let.osaka-u.ac.jp/~kinsui/tex/kunten2e.sty)を使用してコンパイルしてください

\\documentclass[dvipdfmx,autodetect-engine]{utbook}% 
\\usepackage{kuten2e,color}
\\usepackage[normalem]{ulem}
\\begin{document}
${content}
\\end{document}
`;
    }
}