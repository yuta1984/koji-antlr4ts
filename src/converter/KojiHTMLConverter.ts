import { KojiASTNode } from "../KojiAstBuilder";
import {
  KojiElement,
  Furigana,
  Warigaki,
  Okurigana,
  Kaeriten,
  Annotation,
  Illegible,
  BugHole,
  Title,
  Indent1,
  Indent2,
  Indent3
} from "./KojiElement";
import { KojiConverter } from "./KojiConverter";

type KojiElementClass = { new (c: KojiConverter): KojiElement };

export class KojiHTMLConverter implements KojiConverter {
  elementMap: { [str: string]: KojiElement } = {};
  elementClasses: Array<KojiElementClass> = [
    Furigana,
    Warigaki,
    Okurigana,
    Kaeriten,
    Annotation,
    Illegible,
    BugHole,
    Title,
    Indent1,
    Indent2,
    Indent3
  ];

  constructor(elements?: Array<KojiElementClass>) {
    if(elements) this.elementClasses.concat(elements);
    this.elementClasses.forEach(klass => {
      const element = new klass(this);
      this.elementMap[element.elemName] = element;
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
    if (this.elementMap[node.name]) {
      const elem: KojiElement = this.elementMap[node.name];
      return elem.toHTML(node);
    } else {
      let idStr = "",
        classesStr = "";
      if (node.id) idStr = `id='${node.id}'`;
      if (node.classes) classesStr = `class='${node.classes.join(" ")}'`;
      const children = this.convertChildren(node.children);
      return `<span ${idStr} ${classesStr} name='${
        node.name
      }'>${children}</span>`;
    }
  }

  convertBlock(node: KojiASTNode): string {
    if (this.elementMap[node.name]) {
      const elem: KojiElement = this.elementMap[node.name];
      return elem.toHTML(node);
    } else {
      let idStr = "",
        classesStr = "";
      if (node.id) idStr = `id='${node.id}'`;
      if (node.classes) classesStr = `class='${node.classes.join(" ")}'`;    
      const children = this.convertChildren(node.children);      
      return `<div ${idStr} ${classesStr} name='${
        node.name
      }'>${children}</div>`;
    }
  }
}
