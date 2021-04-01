import { KojiDocxDocumentConverter } from './KojiDocxDocumentConverter';
import { KojiDocumentNode } from './../KojiAstBuilder';
import * as JSZip from 'jszip';
import * as fs from 'fs';

export async function generateDocx(path: string, ast: KojiDocumentNode) {
    const converter = new KojiDocxDocumentConverter();
    const doc = converter.convert(ast);
    console.log(doc);
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
    const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
    xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
    xmlns:v="urn:schemas-microsoft-com:vml"
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
            <w:r>
            <w:br/>
        </w:r>
        <w:r>
            <w:ruby>
                <w:rubyPr>
                    <w:rubyAlign w:val="distributeSpace"/>
                    <w:hps w:val="10"/>
                    <w:hpsRaise w:val="18"/>
                    <w:hpsBaseText w:val="21"/>
                    <w:lid w:val="ja-JP"/>
                </w:rubyPr>
                <w:rt>
                    <w:r>
                        <w:rPr>
                            <w:rFonts w:hint="eastAsia"/>
                            <w:sz w:val="10"/>
                        </w:rPr>
                        <w:t>
                            あんせい
                        </w:t>
                    </w:r>
                </w:rt>
                <w:rubyBase>
                    <w:r>
                        <w:rPr>
                            <w:rFonts w:hint="eastAsia"/>
                        </w:rPr>
                        <w:t>
                            安政
                        </w:t>
                    </w:r>
                </w:rubyBase>
            </w:ruby>
        </w:r>
       
        <w:r>
            <w:br/>
        </w:r>
       
        <w:r>
         <w:t>大日本神代ヨリ　　禁売</w:t>
         <w:t>大日本神代ヨリ　　禁売</w:t>
            <w:br/>
        </w:r>
        </w:p>
        <w:sectPr>
            <w:pgSz w:w="16840" w:h="11900" w:orient="landscape"/>
            <w:pgMar w:top="1701" w:right="1701" w:bottom="1701" w:left="1985" w:header="851" w:footer="992" w:gutter="0"/>
            <w:cols w:space="425"/>
            <w:textDirection w:val="tbRl"/>
            <w:docGrid w:type="lines" w:linePitch="360"/>
        </w:sectPr>
    </w:body>
</w:document>`;
    const zip = new JSZip();
    zip.file("_rels/.rels", rels);
    zip.file("word/_rels/document.xml.rels", relationships);
    zip.file("word/document.xml", doc);
    zip.file("[Content_Types].xml", contentType);
    const zipData = await zip.generateAsync({
        type: "nodebuffer",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE",
    });
    fs.writeFileSync(path, zipData);
}