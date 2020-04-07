import { Token } from "antlr4ts/Token";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  BlockContent1Context,
  BlockContent2Context,
  BlockContent3Context,
  BlockContent4Context,
  BlockContent5Context,
  InlineContentContext,
  TextSegmentContext,
  SyntaxSugarContext,
  InlineContext,
  Block1Context,
  Block2Context,
  Block3Context,
  Block4Context,
  Block5Context,
  InlineContentSeqContext
} from "./KojiParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { KojiParserVisitor } from "./KojiParserVisitor";
import { KojiContext, BlockContext, ListContext } from "./KojiParser";

export interface KojiASTNode {
  type: "koji" | "block" | "inline";
  name: string;
  location: { start: number; stop: number };
  children: Array<KojiASTNode | string>;
  id?: string;
  classes?: Array<string>;
  extra?: Array<Array<KojiASTNode | string>>;
}

export class KojiAstBuilder extends AbstractParseTreeVisitor<any>
  implements KojiParserVisitor<any> {
  ast: KojiASTNode;

  defaultResult() { }

  visit(ctx: KojiContext): KojiASTNode {
    return {
      type: "koji",
      name: "koji",
      location: this.loc(ctx),
      children: ctx.list().map(l => this.visitList(l))
    };
  }

  visitList(ctx: ListContext): KojiASTNode | string {
    const block = ctx.block();
    const inline = ctx.inline();
    const syntaxSugar = ctx.syntaxSugar();
    const textSegment = ctx.textSegment();
    const lb = ctx.Lb();
    if (block) {
      return this.visitBlock(block);
    } else if (inline) {
      return this.visitInline(inline);
    } else if (syntaxSugar) {
      return this.visitSyntaxSugar(syntaxSugar);
    } else if (textSegment) {
      return textSegment.text;
    } else if (lb) {
      return "\n";
    }
  }

  visitBlock(ctx: BlockContext): KojiASTNode {
    const block1 = ctx.block1();
    const block2 = ctx.block2();
    const block3 = ctx.block3();
    const block4 = ctx.block4();
    const block5 = ctx.block5();
    if (block1) return this.visitBlock1(block1);
    if (block2) return this.visitBlock2(block2);
    if (block3) return this.visitBlock3(block3);
    if (block4) return this.visitBlock4(block4);
    if (block5) return this.visitBlock5(block5);
  }

  visitBlock1(ctx: Block1Context): KojiASTNode {
    const content = ctx.blockContent1();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: "block",
      name: name,
      children: content.map(c => this.visitBlockContent1(c)),
      ...attrs,
      location: this.loc(ctx)
    };
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
    if (lb) return "\n";
    if (inline) return this.visitInline(inline);
    if (textSegment) return textSegment.text;
    if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
    if (block2) return this.visitBlock2(block2);
    if (block3) return this.visitBlock3(block3);
    if (block4) return this.visitBlock4(block4);
    if (block5) return this.visitBlock5(block5);
  }

  visitBlock2(ctx: Block2Context): KojiASTNode {
    const content = ctx.blockContent2();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: "block",
      name: name,
      children: content.map(c => this.visitBlockContent2(c)),
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitBlockContent2(ctx: BlockContent2Context): KojiASTNode | string {
    const lb = ctx.Lb();
    const inline = ctx.inline();
    const textSegment = ctx.textSegment();
    const syntaxSugar = ctx.syntaxSugar();
    const block3 = ctx.block3();
    const block4 = ctx.block4();
    const block5 = ctx.block5();
    if (lb) return "\n";
    if (inline) return this.visitInline(inline);
    if (textSegment) return textSegment.text;
    if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
    if (block3) return this.visitBlock3(block3);
    if (block4) return this.visitBlock4(block4);
    if (block5) return this.visitBlock5(block5);
  }

  visitBlock3(ctx: Block3Context): KojiASTNode {
    const content = ctx.blockContent3();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: "block",
      name: name,
      children: content.map(c => this.visitBlockContent3(c)),
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitBlockContent3(ctx: BlockContent3Context): KojiASTNode | string {
    const lb = ctx.Lb();
    const inline = ctx.inline();
    const textSegment = ctx.textSegment();
    const syntaxSugar = ctx.syntaxSugar();
    const block4 = ctx.block4();
    const block5 = ctx.block5();
    if (lb) return "\n";
    if (inline) return this.visitInline(inline);
    if (textSegment) return textSegment.text;
    if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
    if (block4) return this.visitBlock4(block4);
    if (block5) return this.visitBlock5(block5);
  }

  visitBlock4(ctx: Block4Context): KojiASTNode {
    const content = ctx.blockContent4();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: "block",
      name: name,
      children: content.map(c => this.visitBlockContent4(c)),
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitBlockContent4(ctx: BlockContent4Context): KojiASTNode | string {
    const lb = ctx.Lb();
    const inline = ctx.inline();
    const textSegment = ctx.textSegment();
    const syntaxSugar = ctx.syntaxSugar();
    const block5 = ctx.block5();
    if (lb) return "\n";
    if (inline) return this.visitInline(inline);
    if (textSegment) return textSegment.text;
    if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
    if (block5) return this.visitBlock5(block5);
  }

  visitBlock5(ctx: Block5Context): KojiASTNode {
    const content = ctx.blockContent5();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: "block",
      name: name,
      children: content.map(c => this.visitBlockContent5(c)),
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitBlockContent5(ctx: BlockContent5Context): KojiASTNode | string {
    const lb = ctx.Lb();
    const inline = ctx.inline();
    const textSegment = ctx.textSegment();
    const syntaxSugar = ctx.syntaxSugar();
    if (lb) return "\n";
    if (inline) return this.visitInline(inline);
    if (textSegment) return textSegment.text;
    if (syntaxSugar) return this.visitSyntaxSugar(syntaxSugar);
  }

  processAttrs(ctx: { ID(): TerminalNode; Class(): TerminalNode[] }) {
    const id = ctx.ID();
    const classes = ctx.Class();
    const attrs: any = {};
    if (id) attrs.id = id.text.slice(1);
    if (classes) attrs.classes = classes.map(c => c.text.slice(1));
    return attrs;
  }

  visitInline(ctx: InlineContext): KojiASTNode {
    const name = ctx.ElemName().text;
    const content = ctx._content;
    const children = content.map(c => this.visitInlineContent(c));
    const extra = ctx._extra;
    const extraChildren = extra.map(e => this.visitInlineContentSeq(e));
    const attrs = this.processAttrs(ctx);
    return {
      type: "inline",
      name: name,
      children: children,
      extra: extraChildren,
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitInlineContentSeq(ctx: InlineContentSeqContext) {
    return ctx.inlineContent().map(c => this.visitInlineContent(c));
  }

  visitInlineContent(ctx: InlineContentContext): KojiASTNode | string {
    const lb = ctx.Lb();
    const inline = ctx.inline();
    const textSegment = ctx.textSegment();
    const syntaxSugar = ctx.syntaxSugar();
    if (lb) {
      return "\n";
    } else if (inline) {
      return this.visitInline(inline);
    } else if (textSegment) {
      return textSegment.text;
    } else if (syntaxSugar) {
      return this.visitSyntaxSugar(syntaxSugar);
    }
  }

  visitSyntaxSugar(ctx: SyntaxSugarContext): KojiASTNode {
    const furigana = ctx.furigana();
    const annotation = ctx.annotation();
    const okurigana = ctx.okurigana();
    const kaeriten = ctx.kaeriten();
    const illegible = ctx.illegible();
    const bugHole = ctx.bugHole();
    const person = ctx.person();
    const place = ctx.place();
    const date = ctx.date();
    if (furigana) {
      const right = furigana._right.text;
      const left = furigana._left ? furigana._left.text : null;
      return {
        name: "振り仮名",
        type: "inline",
        children: [right],
        extra: [[left]],
        location: this.loc(ctx)
      };
    } else if (annotation) {
      return {
        type: "inline",
        name: "注釈",
        children: [annotation._content.text],
        location: this.loc(ctx)
      };
    } else if (okurigana) {
      return {
        type: "inline",
        name: "送り仮名",
        children: [okurigana._content.text],
        location: this.loc(ctx)
      };
    } else if (kaeriten) {
      return {
        type: "inline",
        name: "返り点",
        children: [kaeriten._content.text],
        location: this.loc(ctx)
      };
    } else if (illegible) {
      return {
        type: "inline",
        name: "難読",
        children: [illegible.text],
        location: this.loc(ctx)
      };
    } else if (bugHole) {
      return {
        type: "inline",
        name: "虫損",
        children: [bugHole.text],
        location: this.loc(ctx)
      };
    } else if (person) {
      const child = this.visitInlineContent(person._content)
      return {
        type: "inline",
        name: "人物",
        children: [child],
        location: this.loc(ctx)
      }
    } else if (place) {
      const child = this.visitInlineContent(place._content)
      return {
        type: "inline",
        name: "場所",
        children: [child],
        location: this.loc(ctx)
      }
    } else if (date) {
      const child = this.visitInlineContent(date._content)
      return {
        type: "inline",
        name: "日時",
        children: [child],
        location: this.loc(ctx)
      }
    } else {
      throw new Error("parsing error");
    }
  }

  loc(ctx: { start: Token; stop: Token }) {
    return { start: ctx.start.startIndex, stop: ctx.stop.stopIndex };
  }

  visitChildren() { }

  visitErrorNode() { }

  visitTerminal() { }

  visitKoji(ctx: KojiContext): any { }
}
