import { ConversionRule } from '../KojiConverter';
const Kaeriten: ConversionRule = {
	elemName: '返り点',
	type: 'inline',
	doc: '漢文の送り仮名をマークアップします。',
	example: '｛＿レ｝',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '＿{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Kaeriten {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<metamark function="kaeriten">レ</metamark>`,
	docxTemplate: `
			<w:r>
        		<w:rPr>
                    <w:rFonts w:hint="eastAsia"/>
                    <w:vertAlign w:val="subscript"/>
                </w:rPr>
                <w:t>{{{$$1}}}</w:t>
            </w:r>
	`,
	latexTemplate: '\\kaeriten{ {{{$1}}} }'

};

export default Kaeriten;
