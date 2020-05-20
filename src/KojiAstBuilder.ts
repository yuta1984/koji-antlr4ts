import { Token } from 'antlr4ts/Token';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
	BlockContent1Context,
	BlockContent2Context,
	BlockContent3Context,
	BlockContent4Context,
	BlockContent5Context,
	InlineContentContext,
	SyntaxSugarContext,
	InlineContext,
	Block1Context,
	Block2Context,
	Block3Context,
	Block4Context,
	Block5Context,
	InlineContentSeqContext
} from './KojiParser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { KojiParserVisitor } from './KojiParserVisitor';
import { KojiContext, BlockContext, ListContext, PostPositionedAttrsContext } from './KojiParser';
import { ParserRuleContext } from 'antlr4ts';

type Location = { start: number; stop: number };

export interface KojiASTNode {
	type: 'block' | 'inline';
	name: string;
	location: Location;
	children: Array<Array<KojiASTNode | string>>;
	id?: string;
	classes?: Array<string>;
}

export interface KojiDocumentNode {
	type: 'document';
	name: 'document';
	body: Array<KojiASTNode | string>;
	inlines: KojiASTNode[];
	blocks: KojiASTNode[];
	parens: Location[];
}

export interface KojiBlockNode extends KojiASTNode {
	level: number;
	content: Location;
}

export interface KojiInlineNode extends KojiASTNode {
	paren?: Location;
	isSyntaxSugar: boolean;
}

export class KojiAstBuilder extends AbstractParseTreeVisitor<any> implements KojiParserVisitor<any> {
	ast: KojiASTNode;
	inlines: KojiInlineNode[] = [];
	blocks: KojiBlockNode[] = [];
	parens: Location[] = [];

	defaultResult() {}

	visit(ctx: KojiContext): KojiDocumentNode {
		return {
			type: 'document',
			name: 'document',
			body: ctx.list().map((l) => this.visitList(l)),
			inlines: this.inlines,
			blocks: this.blocks,
			parens: this.parens
		};
	}

	visitList(ctx: ListContext): KojiASTNode | string {
		const block = ctx.block();
		const inline = ctx.inline();
		const syntaxSugar = ctx.syntaxSugar();
		const textSegment = ctx.textSegment();
		const lb = ctx.Lb();
		if (block) {
			const blockNode = this.visitBlock(block);
			return blockNode;
		} else if (inline) {
			const inlineNode = this.visitInline(inline);
			return inlineNode;
		} else if (syntaxSugar) {
			const inlineNode = this.visitSyntaxSugar(syntaxSugar);
			return inlineNode;
		} else if (textSegment) {
			return textSegment.text;
		} else if (lb) {
			return '\n';
		}
	}

	visitBlock(ctx: BlockContext): KojiBlockNode {
		const block1 = ctx.block1();
		const block2 = ctx.block2();
		const block3 = ctx.block3();
		const block4 = ctx.block4();
		const block5 = ctx.block5();
		let node: KojiBlockNode;
		if (block1) node = this.visitBlock1(block1);
		if (block2) node = this.visitBlock2(block2);
		if (block3) node = this.visitBlock3(block3);
		if (block4) node = this.visitBlock4(block4);
		if (block5) node = this.visitBlock5(block5);
		return node;
	}

	private locationOfBlockContent(ctx: ParserRuleContext): Location {
		const text = ctx.text;
		const loc = this.loc(ctx);
		return { start: loc.start + text.indexOf('\n'), stop: loc.stop };
	}

	visitBlock1(ctx: Block1Context): KojiBlockNode {
		const content = ctx.blockContent1();
		const name = ctx.ElemName().text;
		const attrs = this.processAttrs(ctx);
		const node: KojiBlockNode = {
			type: 'block',
			name: name,
			children: [ content.map((c) => this.visitBlockContent1(c)) ],
			...attrs,
			location: this.loc(ctx),
			level: 1,
			content: this.locationOfBlockContent(ctx)
		};
		this.blocks.push(node);
		return node;
	}

	visitBlockContent1(ctx: BlockContent1Context): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		const block2 = ctx.block2();
		const block3 = ctx.block3();
		const block4 = ctx.block4();
		const block5 = ctx.block5();
		if (lb) return '\n';
		if (inline) return this.visitInline(inline);
		if (textSegment) return textSegment.text;
		if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
		if (block2) return this.visitBlock2(block2);
		if (block3) return this.visitBlock3(block3);
		if (block4) return this.visitBlock4(block4);
		if (block5) return this.visitBlock5(block5);
	}

	visitBlock2(ctx: Block2Context): KojiBlockNode {
		const content = ctx.blockContent2();
		const name = ctx.ElemName().text;
		const attrs = this.processAttrs(ctx);
		const node: KojiBlockNode = {
			type: 'block',
			name: name,
			children: [ content.map((c) => this.visitBlockContent2(c)) ],
			...attrs,
			location: this.loc(ctx),
			level: 2,
			content: this.locationOfBlockContent(ctx)
		};
		this.blocks.push(node);
		return node;
	}

	visitBlockContent2(ctx: BlockContent2Context): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		const block3 = ctx.block3();
		const block4 = ctx.block4();
		const block5 = ctx.block5();
		if (lb) return '\n';
		if (inline) return this.visitInline(inline);
		if (textSegment) return textSegment.text;
		if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
		if (block3) return this.visitBlock3(block3);
		if (block4) return this.visitBlock4(block4);
		if (block5) return this.visitBlock5(block5);
	}

	visitBlock3(ctx: Block3Context): KojiBlockNode {
		const content = ctx.blockContent3();
		const name = ctx.ElemName().text;
		const attrs = this.processAttrs(ctx);
		const node: KojiBlockNode = {
			type: 'block',
			name: name,
			children: [ content.map((c) => this.visitBlockContent3(c)) ],
			...attrs,
			location: this.loc(ctx),
			level: 3,
			content: this.locationOfBlockContent(ctx)
		};
		this.blocks.push(node);
		return node;
	}

	visitBlockContent3(ctx: BlockContent3Context): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		const block4 = ctx.block4();
		const block5 = ctx.block5();
		if (lb) return '\n';
		if (inline) return this.visitInline(inline);
		if (textSegment) return textSegment.text;
		if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
		if (block4) return this.visitBlock4(block4);
		if (block5) return this.visitBlock5(block5);
	}

	visitBlock4(ctx: Block4Context): KojiBlockNode {
		const content = ctx.blockContent4();
		const name = ctx.ElemName().text;
		const attrs = this.processAttrs(ctx);
		const node: KojiBlockNode = {
			type: 'block',
			name: name,
			children: [ content.map((c) => this.visitBlockContent4(c)) ],
			...attrs,
			location: this.loc(ctx),
			level: 4,
			content: this.locationOfBlockContent(ctx)
		};
		this.blocks.push(node);
		return node;
	}

	visitBlockContent4(ctx: BlockContent4Context): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		const block5 = ctx.block5();
		if (lb) return '\n';
		if (inline) return this.visitInline(inline);
		if (textSegment) return textSegment.text;
		if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
		if (block5) return this.visitBlock5(block5);
	}

	visitBlock5(ctx: Block5Context): KojiBlockNode {
		const content = ctx.blockContent5();
		const name = ctx.ElemName().text;
		const attrs = this.processAttrs(ctx);
		const node: KojiBlockNode = {
			type: 'block',
			name: name,
			children: [ content.map((c) => this.visitBlockContent5(c)) ],
			...attrs,
			location: this.loc(ctx),
			level: 5,
			content: this.locationOfBlockContent(ctx)
		};
		this.blocks.push(node);
		return node;
	}

	visitBlockContent5(ctx: BlockContent5Context): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		if (lb) return '\n';
		if (inline) return this.visitInline(inline);
		if (textSegment) return textSegment.text;
		if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
	}

	processAttrs(ctx: { ID(): TerminalNode; Class(): TerminalNode[] }): { id: string; classes: string[] } {
		const id = ctx.ID();
		const classes = ctx.Class();
		const attrs: any = {};
		if (id) attrs.id = id.text.slice(1);
		if (classes) attrs.classes = classes.map((c) => c.text.slice(1));
		return attrs;
	}

	processPostAttrs(ctx: PostPositionedAttrsContext) {
		const attrs: any = {};
		const id = ctx.ID();
		const classes = ctx.Class();
		if (id) attrs.id = id.text.slice(1);
		if (classes) attrs.classes = classes.map((c) => c.text.slice(1));
		return attrs;
	}

	visitInline(ctx: InlineContext): KojiInlineNode {
		const name = ctx.ElemName().text;
		const content = ctx._content;
		const children = content.map((c) => this.visitInlineContentSeq(c));
		const attrs = this.processAttrs(ctx);
		const location = this.loc(ctx);
		this.parens.push(location);
		const node: KojiInlineNode = {
			type: 'inline',
			name: name,
			children: children,
			...attrs,
			location,
			paren: { start: location.start, stop: location.stop },
			isSyntaxSugar: false
		};
		this.inlines.push(node);
		return node;
	}

	visitInlineContentSeq(ctx: InlineContentSeqContext) {
		return ctx.inlineContent().map((c) => this.visitInlineContent(c));
	}

	visitInlineContent(ctx: InlineContentContext): KojiASTNode | string {
		const lb = ctx.Lb();
		const inline = ctx.inline();
		const textSegment = ctx.textSegment();
		const syntaxSugar = ctx.syntaxSugar();
		if (lb) {
			return '\n';
		} else if (inline) {
			return this.visitInline(inline);
		} else if (textSegment) {
			return textSegment.text;
		} else if (syntaxSugar) {
			return this.visitSyntaxSugar(syntaxSugar);
		}
	}

	visitSyntaxSugar(ctx: SyntaxSugarContext): KojiInlineNode {
		const furigana = ctx.furigana();
		const annotation = ctx.annotation();
		const okurigana = ctx.okurigana();
		const kaeriten = ctx.kaeriten();
		const tateten = ctx.tateten();
		const illegible = ctx.illegible();
		const bugHole = ctx.bugHole();
		const person = ctx.person();
		const place = ctx.place();
		const date = ctx.date();
		const location = this.loc(ctx);
		let node: KojiInlineNode;
		if (furigana) {
			const parenStart = location.start + ctx.text.indexOf('（');
			this.parens.push({ start: parenStart, stop: location.stop });
			node = {
				name: '振り仮名',
				type: 'inline',
				children: [ [ furigana._target.text ], [ furigana._right.text ] ],
				location,
				isSyntaxSugar: true
			};
			if (furigana._left) node.children.push([ furigana._left.text ]);
		} else if (annotation) {
			this.parens.push(location);
			node = {
				type: 'inline',
				name: '注釈',
				children: [ [ annotation._content.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (okurigana) {
			node = {
				type: 'inline',
				name: '送り仮名',
				children: [ [ okurigana._content.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (kaeriten) {
			node = {
				type: 'inline',
				name: '返り点',
				children: [ [ kaeriten._content.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (tateten) {
			node = {
				type: 'inline',
				name: '竪点',
				children: [ [ tateten.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (illegible) {
			node = {
				type: 'inline',
				name: '難読',
				children: [ [ illegible.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (bugHole) {
			node = {
				type: 'inline',
				name: '虫損',
				children: [ [ bugHole.text ] ],
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (person) {
			this.parens.push(location);
			const content = person._content;
			const children = [ content.map((c) => this.visitInlineContent(c)) ];
			const attrsCtx = person.postPositionedAttrs();
			const attrs = attrsCtx ? this.processAttrs(person.postPositionedAttrs()) : {};
			node = {
				type: 'inline',
				name: '人物',
				...attrs,
				children,
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (place) {
			this.parens.push(location);
			const content = place._content;
			const children = [ content.map((c) => this.visitInlineContent(c)) ];
			const attrsCtx = place.postPositionedAttrs();
			const attrs = attrsCtx ? this.processAttrs(place.postPositionedAttrs()) : {};
			node = {
				type: 'inline',
				name: '場所',
				...attrs,
				children,
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else if (date) {
			this.parens.push(location);
			const content = date._content;
			const children = [ content.map((c) => this.visitInlineContent(c)) ];
			const attrsCtx = date.postPositionedAttrs();
			const attrs = attrsCtx ? this.processAttrs(date.postPositionedAttrs()) : {};
			node = {
				type: 'inline',
				name: '日時',
				...attrs,
				children,
				location: this.loc(ctx),
				isSyntaxSugar: true
			};
		} else {
			throw new Error('parsing error');
		}
		this.inlines.push(node);
		return node;
	}

	loc(ctx: { start: Token; stop: Token }): Location {
		return { start: ctx.start.startIndex, stop: ctx.stop.stopIndex };
	}

	visitChildren() {}

	visitErrorNode() {}

	visitTerminal() {}

	visitKoji(ctx: KojiContext): any {}
}
