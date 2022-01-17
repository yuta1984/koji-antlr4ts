import { ConversionRule } from '../KojiConverter';

const Kenten: ConversionRule = {
    elemName: '見せ消ち',
    type: 'inline',
    doc: '',
    example: '《見せ消ち：訂正された箇所｜追記された箇所》',
    minContentCount: 1,
    maxContentCount: 1,
    textTemplate: '{{$2}}（見せ消ち：{{$1}}）',
    htmlTemplate: `
    <ruby {{{$htmlId}}} class="Misekechi {{$classes}}">
        <rb><del>{{{$1}}}</del></rb>
        {{#$2}}
        <rt>{{{$2}}}</rt>
        {{/$2}}        
    </ruby>`,
    xmlTemplate: `
    <subst>
        <del>{{{$1}}}</del>
        <add>{{{$2}}}</add>
    </subst>`,
    docxTemplate: `
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
                            <w:t>{{{$$2}}}</w:t>
                        </w:r>
                    </w:rt>
                    <w:rubyBase>
                        <w:r>
                            <w:rPr>
                                <w:rFonts w:hint="eastAsia"/>
                                <w:strike/>
                            </w:rPr>
                            <w:t>{{{$$1}}}</w:t>
                        </w:r>
                    </w:rubyBase>
                </w:ruby>
            </w:r>
	`,
    latexTemplate: `\\sout{ \\MigiKataTn{ {{{$1}}} }{ {{{$2}}} } }`
};

export default Kenten;
