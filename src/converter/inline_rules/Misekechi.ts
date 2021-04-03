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
    <del rend="overstrike">{{{$1}}}</del>
    {{#$2}}
    <add place="right">{{{$2}}}</add>
    {{/$2}}`,
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
	`
};

export default Kenten;
