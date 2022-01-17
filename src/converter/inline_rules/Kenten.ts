import { ConversionRule } from '../KojiConverter';

const Kenten: ConversionRule = {
    elemName: '圏点',
    type: 'inline',
    doc: '圏点を打たれたテキストをタグ付けします。第1要素はテキスト本体、第2要素には「○」など圏点に利用される記号を入力します。',
    example: '《圏点：圏点を打たれた文章｜﹅》',
    minContentCount: 1,
    maxContentCount: 2,
    textTemplate: '{{$text}}',
    htmlTemplate: `
    <span {{{$htmlId}}} class="Kenten {{$classes}}"
    {{#$2}}
    style="text-emphasis: '{{$2}}'; -webkit-text-emphasis: '{{$2}}'"
    {{/$2}}         
    >
        {{{$1}}}
    </span>`,
    xmlTemplate: `<seg style="text-emphasis: filled sesame">{{{$1}}}</seg>`,
    docxTemplate: `
	<w:r>
            <w:rPr>
                <w:em w:val="dot"/>
            </w:rPr>
            <w:t>{{{$$1}}}</w:t>
    </w:r>
	`,
    latexTemplate: "\\bou{ {{{$1}}} }"
};

export default Kenten;
