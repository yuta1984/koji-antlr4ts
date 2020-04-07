import { KojiASTNode } from "../KojiAstBuilder";
import { KojiConverter } from "./KojiConverter";

export abstract class KojiElement {
  static elemName: string;
  node: KojiASTNode;
  converter: KojiConverter;
  constructor(converter: KojiConverter) {
    this.converter = converter;
  }
  abstract get elemName(): string;
  abstract toHTML(node: KojiASTNode): string;
  abstract toTEI(node: KojiASTNode): string;
  abstract toText(node: KojiASTNode): string;

  convertChildren(children: Array<KojiASTNode | string>) {
    return this.converter.convertChildren(children);
  }

  toPDF(node: KojiASTNode): string {
    return this.toText(node);
  }

  toEPUB(node: KojiASTNode): string {
    return this.toText(node);
  }

  toMSWord(node: KojiASTNode): string {
    return this.toText(node);
  }
}

export class Furigana extends KojiElement {
  get elemName() {
    return "振り仮名";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    const right = this.converter.convertChildren(node.extra[0]);
    if (node.extra[1]) {
      const left = this.converter.convertChildren(node.extra[1]);
      return `${text}（${right}｜${left}）`;
    } else {
      return `${text}（${right}）`;
    }
  }

  toHTML(node: KojiASTNode) {
    const text = this.converter.convertChildren(node.children);
    const right = this.converter.convertChildren(node.extra[0]);
    if (node.extra[1]) {
      const left = this.converter.convertChildren(node.extra[1]);
      return `
          <ruby class="Furigana">
              ${text}<rt class="right">${right}</rt>
              <rt class="left">${left}</rt>
          </ruby>
        `;
    } else {
      return `
          <ruby class="Furigana">
              ${text}<rt>${right}</rt>
          </ruby>
        `;
    }

  }
}

export class Warigaki extends KojiElement {
  get elemName() {
    return "割書";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    const kana = this.converter.convertChildren(node.extra[0]);
    return `《割書：${text}｜${kana}》`;
  }

  toHTML(node: KojiASTNode) {
    const right = this.converter.convertChildren(node.children);
    let left = "";
    if (node.extra[0]) left = this.converter.convertChildren(node.extra[0]);
    return `
    <span class="Warigaki">
      <span class="warigaki-left">${left}</span>
      <span class="warigaki-right">${right}</span>                
    </span>`;
  }
}

export class Kaeriten extends KojiElement {
  get elemName() {
    return "返り点";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `＿${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<span class="Kaeriten inline" >${text}</span>`;
  }
}

export class Okurigana extends KojiElement {
  get elemName() {
    return "送り仮名";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `￣${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<span class="Okurigana inline" >${text}</span>`;
  }
}

export class Annotation extends KojiElement {
  get elemName() {
    return "注釈";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `【${text}】`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<span class="Annotation inline" >${text}</span>`;
  }
}

export class Illegible extends KojiElement {
  get elemName() {
    return "難読";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<span class="Illegible inline" >${text}</span>`;
  }
}

export class BugHole extends KojiElement {
  get elemName() {
    return "虫損";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<span class="BugHole inline" >${text}</span>`;
  }
}

export class Title extends KojiElement {
  get elemName() {
    return "題";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<h1 class="Title inline" >${text}</h1>`;
  }
}

export class Indent1 extends KojiElement {
  get elemName() {
    return "字下げ一";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<div class="Indent1 block" >${text}</div>`;
  }
}

export class Indent2 extends KojiElement {
  get elemName() {
    return "字下げ二";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<div class="Indent2 block" >${text}</div>`;
  }
}

export class Indent3 extends KojiElement {
  get elemName() {
    return "字下げ三";
  }

  toTEI(node: KojiASTNode): string {
    throw new Error("Method not implemented.");
  }

  toText(node: KojiASTNode): string {
    const text = this.converter.convertChildren(node.children);
    return `${text}`;
  }

  toHTML(node: KojiASTNode) {
    const text = this.convertChildren(node.children);
    return `<div class="Indent3 block" >${text}</div>`;
  }
}
