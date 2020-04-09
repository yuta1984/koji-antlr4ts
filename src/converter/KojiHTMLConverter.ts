import { KojiASTNode } from "../KojiAstBuilder";
import { KojiElement } from "./KojiElement";
import { KojiConverter } from "./KojiConverter";

function requireAll(r) { return r.keys().map(r).map(module => module.default); }
type KojiElementClass = { new(c: KojiConverter): KojiElement; };

export class KojiHTMLConverter implements KojiConverter {
  inlineElementMap: { [str: string]: KojiElement; } = {};
  blockElementMap: { [str: string]: KojiElement; } = {};
  inlineElementClasses: Array<KojiElementClass> =
    requireAll(require.context('./inline_elements/', true, /\.ts$/));
  blockElementClasses: Array<KojiElementClass> =
    requireAll(require.context('./block_elements/', true, /\.ts$/));

  constructor() {
    this.inlineElementClasses.forEach(klass => {
      const element = new klass(this);
      this.inlineElementMap[element.elemName] = element;
    });
    this.blockElementClasses.forEach(klass => {
      const element = new klass(this);
      this.blockElementMap[element.elemName] = element;
    });
  }

  convert(ast: KojiASTNode) {
    const children = this.convertChildren(ast.children);
    return `<div class='koji'>${children}</div>`;
  }

  convertChildren(children: Array<KojiASTNode | string>): string {
    return children
      .map(c => {
        if (typeof c === "string") {
          if (c === "\n") return "<br>";
          return c;
        } else if (c.type === "block") {
          return this.convertBlock(c);
        } else if (c.type === "inline") {
          return this.convertInline(c);
        }
      })
      .join("");
  }

  convertInline(node: KojiASTNode): string {
    if (this.inlineElementMap[node.name]) {
      const elem: KojiElement = this.inlineElementMap[node.name];
      return elem.toHTML(node);
    } else {
      let idStr = "",
        classesStr = "";
      if (node.id) idStr = `id='${node.id}'`;
      if (node.classes) classesStr = `class='inline ${node.classes.join(" ")}'`;
      const children = this.convertChildren(node.children);
      return `<span ${idStr} ${classesStr} name='${
        node.name
        }'>${children}</span>`;
    }
  }

  convertBlock(node: KojiASTNode): string {
    if (this.blockElementMap[node.name]) {
      const elem: KojiElement = this.blockElementMap[node.name];
      return elem.toHTML(node);
    } else {
      let idStr = "",
        classesStr = "";
      if (node.id) idStr = `id='${node.id}'`;
      if (node.classes) classesStr = `class='block block${node.level} ${node.classes.join(" ")}'`;
      const children = this.convertChildren(node.children);
      return `<div ${idStr} ${classesStr} name='${
        node.name
        }'>${children}</div>`;
    }
  }
}
