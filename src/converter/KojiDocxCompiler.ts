import { KojiDocxDocumentConverter } from './KojiDocxDocumentConverter';
import { KojiDocumentNode } from '../KojiAstBuilder';
import JSZip from 'jszip';

export function compile(ast: KojiDocumentNode) {
  const converter = new KojiDocxDocumentConverter();
  const doc = converter.convert(ast);
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
                  Target="word/document.xml"/>
</Relationships>`;
  const relationships = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">

</Relationships>`;
  const contentType = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
    <Default Extension="xml" ContentType="application/xml"/>
    <Override PartName="/word/document.xml"
              ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;
  const zip = new JSZip();
  zip.file('_rels/.rels', rels);
  zip.file('word/_rels/document.xml.rels', relationships);
  zip.file('word/document.xml', doc);
  zip.file('[Content_Types].xml', contentType);
  return zip;
}

export async function toBuffer(
  ast: KojiDocumentNode
): Promise<Buffer> {
  const zip = compile(ast);
  const zipData = await zip.generateAsync({
    type: 'nodebuffer',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    compression: 'DEFLATE',
  });
  return zipData;
}

export async function toBase64String(
  ast: KojiDocumentNode
): Promise<string> {
  const zip = compile(ast);
  const zipData = await zip.generateAsync({
    type: 'base64',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    compression: 'DEFLATE',
  });
  return zipData;
}

export async function toBlob(
  ast: KojiDocumentNode
): Promise<Blob> {
  const zip = compile(ast);
  const zipData = await zip.generateAsync({
    type: 'blob',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    compression: 'DEFLATE',
  });
  return zipData;
}
