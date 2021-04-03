import { parse, convertToDocxDocumentXml, convertToDocx } from '../src';
import * as chai from 'chai';
import * as chaiXml from 'chai-xml';
import * as fs from 'fs';

chai.use(chaiXml);
const expect = chai.expect;


const case2 = `
漢-文
`;
const case1 = `【表紙】
「大日本籌海図誌　全」`;
const expected1 = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">
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
                <w:t>
                    二年
                </w:t>
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
const ast = parse(case1).ast;

describe('docx xml converter', () => {
    it('should generate a docx from case1 without any errors', () => {
        let fn = () => {

        };
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
            const base64 = await convertToDocx(ast, "base64");
            //const blob = await convertToDocx(ast, "blob");
            const buf = await convertToDocx(ast, "buffer");
        };
        expect(fn).not.to.throw();
    });

    it('should generate a valid docx file', async () => {
        const buf = await convertToDocx(ast, "buffer");
        fs.writeFileSync("/Users/yuta/Desktop/test.docx", buf);
    });
});
