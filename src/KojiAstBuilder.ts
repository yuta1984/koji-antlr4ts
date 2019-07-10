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

export class KojiAstBuilder extends AbstractParseTreeVisitor<any>
  implements KojiParserVisitor<any> {
  ast: any;

  constructor() {
    super();
    this.ast = { type: "koji" };
  }

  defaultResult() {}

  visit(ctx: KojiContext): any {
    this.ast.children = ctx.list().map((l) => this.visitList(l));
    this.ast.location = this.loc(ctx);
    return this.ast;
  }

  visitList(ctx: ListContext) {
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

  visitBlock(ctx: BlockContext): any {
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

  visitBlock1(ctx: Block1Context) {
    const content = ctx.blockContent1();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      chilren: content.map((c) => this.visitBlockContent1(c)),
      ...attrs,
      location: this.loc(ctx),
      block: true
    };
  }

  visitBlockContent1(ctx: BlockContent1Context) {
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

  visitBlock2(ctx: Block2Context) {
    const content = ctx.blockContent2();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      chilren: content.map((c) => this.visitBlockContent2(c)),
      ...attrs,
      location: this.loc(ctx),
      block: true
    };
  }

  visitBlockContent2(ctx: BlockContent2Context) {
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

  visitBlock3(ctx: Block3Context) {
    const content = ctx.blockContent3();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      chilren: content.map((c) => this.visitBlockContent3(c)),
      ...attrs,
      location: this.loc(ctx),
      block: true
    };
  }

  visitBlockContent3(ctx: BlockContent3Context) {
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

  visitBlock4(ctx: Block4Context) {
    const content = ctx.blockContent4();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      chilren: content.map((c) => this.visitBlockContent4(c)),
      ...attrs,
      location: this.loc(ctx),
      block: true
    };
  }

  visitBlockContent4(ctx: BlockContent4Context) {
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

  visitBlock5(ctx: Block5Context) {
    const content = ctx.blockContent5();
    const name = ctx.ElemName().text;
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      chilren: content.map((c) => this.visitBlockContent5(c)),
      ...attrs,
      location: this.loc(ctx),
      block: true
    };
  }

  visitBlockContent5(ctx: BlockContent5Context) {
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
    if (classes) attrs.classes = classes.map((c) => c.text.slice(1));
    return attrs;
  }

  visitInline(ctx: InlineContext): any {
    const name = ctx.ElemName().text;
    //const id = this.getIdValue(ctx.ID());
    //const classes = this.getClasses(ctx.Class());
    const content = ctx._content;
    const children = content.map((c) => this.visitInlineContentSeq(c));
    //children.push(extra.map((c) => this.visitInlineContentSeq(c)));
    //const extraChildren = extra.map((e) => this.visitInlineContent(e));
    const attrs = this.processAttrs(ctx);
    return {
      type: name,
      inline: true,
      children: children,
      ...attrs,
      location: this.loc(ctx)
    };
  }

  visitInlineContentSeq(ctx: InlineContentSeqContext) {
    return ctx.inlineContent().map((c) => this.visitInlineContent(c));
  }

  visitInlineContent(ctx: InlineContentContext): any {
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

  visitSyntaxSugar(ctx: SyntaxSugarContext): any {
    const furigana = ctx.furigana();
    const annotation = ctx.annotation();
    const okurigana = ctx.okurigana();
    const kaeriten = ctx.kaeriten();
    const illegible = ctx.illegible();
    const bugHole = ctx.bugHole();
    if (furigana) {
      const kanji = furigana
        .Kanji()
        .map((k) => k.text)
        .join("");
      const kana = furigana
        .FuriganaParen()
        .text.replace("（", "")
        .replace("）", "");
      return {
        type: "振り仮名",
        text: kanji,
        kana: kana,
        location: this.loc(ctx)
      };
    } else if (annotation) {
      return { type: "注釈", text: annotation.text, location: this.loc(ctx) };
    } else if (okurigana) {
      return {
        type: "送り仮名",
        text: okurigana.text.replace("￣", ""),
        location: this.loc(ctx)
      };
    } else if (kaeriten) {
      return {
        type: "返り点",
        text: kaeriten.text.replace("＿", ""),
        location: this.loc(ctx)
      };
    } else if (illegible) {
      return {
        type: "難読",
        size: illegible.Illegible().length,
        location: this.loc(ctx)
      };
    } else if (bugHole) {
      return {
        type: "inline",
        name: "虫損",
        size: bugHole.BugHole().length,
        location: this.loc(ctx)
      };
    } else {
      throw new Error("parsing error");
    }
  }

  loc(ctx: { start: Token; stop: Token }) {
    return { start: ctx.start.startIndex, stop: ctx.stop.stopIndex };
  }

  visitChildren() {}

  visitErrorNode() {}

  visitTerminal() {}

  visitKoji(ctx: KojiContext): any {}
}
