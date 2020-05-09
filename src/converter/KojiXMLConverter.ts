import { KojiASTNode, KojiBlockNode, KojiInlineNode, KojiDocumentNode } from '../KojiAstBuilder';
import { KojiElement } from './KojiElement';
import { KojiConverter } from './KojiConverter';
import inlineElementClasses from './inline_elements';
import blockElementClasses from './block_elements';
import * as format from 'xml-formatter';

type KojiElementClass = { new (c: KojiConverter): KojiElement };

export class KojiXMLConverter implements KojiConverter {
	inlineElementMap: { [str: string]: KojiElement } = {};
	blockElementMap: { [str: string]: KojiElement } = {};
	inlineElementClasses: Array<KojiElementClass> = inlineElementClasses;
	blockElementClasses: Array<KojiElementClass> = blockElementClasses;

	constructor() {
		this.inlineElementClasses.forEach((klass) => {
			const element = new klass(this);
			this.inlineElementMap[element.elemName] = element;
		});
		this.blockElementClasses.forEach((klass) => {
			const element = new klass(this);
			this.blockElementMap[element.elemName] = element;
		});
	}

	convert(ast: KojiDocumentNode) {
		const children = this.convertChildren(ast.children);
		console.log(format);
		return format(`<text>${children}</text>`);
	}

	convertChildren(children: Array<KojiASTNode | string>): string {
		return children
			.map((c) => {
				if (typeof c === 'string') {
					if (c === '\n') return '<lb/>';
					return c;
				} else if (this.isBlockNode(c)) {
					return this.convertBlock(c);
				} else if (this.isInlineNode(c)) {
					return this.convertInline(c);
				}
			})
			.join('');
	}

	convertInline(node: KojiASTNode): string {
		if (this.inlineElementMap[node.name]) {
			const elem: KojiElement = this.inlineElementMap[node.name];
			return elem.toXML(node);
		} else {
			let idStr = '',
				classesStr = '';
			if (node.id) idStr = `xml:id='${node.id}'`;
			if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
			const children = this.convertChildren(node.children);
			return `<span ${idStr} ${classesStr} type='${node.name}'>${children}</span>`;
		}
	}

	convertBlock(node: KojiBlockNode): string {
		if (this.blockElementMap[node.name]) {
			const elem: KojiElement = this.blockElementMap[node.name];
			return elem.toXML(node);
		} else {
			let idStr = '',
				classesStr = '';
			if (node.id) idStr = `xml:id='${node.id}'`;
			if (node.classes) classesStr = `subtype='${node.classes.join(' ')}'`;
			const children = this.convertChildren(node.children);
			return `<div ${idStr} ${classesStr} type='${node.name}'>${children}</div>`;
		}
	}

	private isBlockNode(block: any): block is KojiBlockNode {
		return block.type === 'block';
	}

	private isInlineNode(block: any): block is KojiInlineNode {
		return block.type === 'inline';
	}
}
