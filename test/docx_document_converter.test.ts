import {
  parse,
  convertToDocxDocumentXml,
  convertToDocx,
} from '../src';
import chai, { expect } from 'chai';
import chaiXml from 'chai-xml';
import * as fs from 'fs';

chai.use(chaiXml);

const case2 = `
漢-文
`;
const case1 = `
いいい犬猫（いぬねこ）あああ
`;

const ast = parse(case1).ast;

describe('docx xml converter', () => {
  it('should generate a docx from case1 without any errors', () => {
    let fn = () => {};
    expect(fn).not.to.throw();
  });

  it('should be valid', () => {
    const xml = convertToDocxDocumentXml(ast);
    expect(xml).xml.to.be.valid();
  });
});

describe('docx binary converter', () => {
  it('should return buffer or base64', async () => {
    let fn = async () => {
      const base64 = await convertToDocx(ast, 'base64');
      //const blob = await convertToDocx(ast, "blob");
      const buf = await convertToDocx(ast, 'buffer');
    };
    expect(fn).not.to.throw();
  });

  it('should generate a valid docx file', async () => {
    const buf = await convertToDocx(ast, 'buffer');
    fs.writeFileSync('/Users/yuta/Desktop/test.docx', buf);
  });
});
