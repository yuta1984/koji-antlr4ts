import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';
import { KojiConverter, ConversionRule, ConversionOptions, assertConversionRuleIsValid } from './KojiConverter';
import inlineConversionRules from './inline_rules';
import blockConversionRules from './block_rules';
import * as Mustache from 'mustache';
import * as format from 'xml-formatter';

export class KojiDocxDocumentConverter implements KojiConverter {
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
        for (let i = 0; i < children.length; i++) {
            if (/^<w:t>.*<\/w:t>$/.test(children[i])) {
                children[i] = `<w:r>${children[i]}</w:r>`;
            }
        }
        return format(this.document(`${children.join('')}`));
    }

    convertChildren(children: Array<Array<KojiASTNode | string>>): string[] {
        return children.map((content) => {
            return content
                .map((node) => {
                    if (typeof node === 'string') {
                        if (node === '\n') return '<w:r><w:br/></w:r>';
                        return `<w:r><w:t>${node}</w:t></w:r>`;

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
            return Mustache.render(rule.docxTemplate, this.buildMustacheVariables(node));
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
                vars[`$$${i + 1}`] = children[i].replace(/<\/?[^>]+(>|$)/g, "");;
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
        return `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
            xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
            xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
            xmlns:w10="urn:schemas-microsoft-com:office:word"
            xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
            xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
            xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
            xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
            xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
            xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">
    <w:body>
        <w:p>
            <w:pPr>
                <w:jc w:val="left"/>
            </w:pPr>
        ${content}
        </w:p>
        <w:sectPr>
            <w:pgSz w:w="16840" w:h="11900" w:orient="landscape"/>
            <w:pgMar w:top="1701" w:right="1701" w:bottom="1701" w:left="1985" w:header="851" w:footer="992" w:gutter="0"/>
            <w:cols w:space="425"/>
            <w:textDirection w:val="tbRl"/>
            <w:docGrid w:type="lines" w:linePitch="360"/>
        </w:sectPr>
    </w:body>
</w:document>
`;
    }
}