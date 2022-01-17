import { ConversionRule } from '../KojiConverter';

const Warigaki: ConversionRule = {
	elemName: '割書',
	type: 'inline',
	doc: '割書を挿入します。"｜"で区切られた各テキストが行になります。',
	example: '《割書：一行目｜二行目｜三行目》',
	minContentCount: 2,
	maxContentCount: 4,
	textTemplate: "（{{$0.join('／')}}）",
	htmlTemplate: `
	<span {{{$htmlId}}} class="Warigaki {{$classes}}">
		{{#$0}}
		<span class="warigaki-line">{{{.}}}</span>
		{{/$0}}
	</span>
	`,
	xmlTemplate: `
	<note type="wari">
		{{#$0}}
		{{{.}}}<milestone unit="wrb"/>
		{{/$0}}
	</note>
	`,
	docxTemplate: `
	<w:r>
        <w:rPr>
          <w:rFonts w:hint="eastAsia"/>
          <w:eastAsianLayout w:combine="1"/>
        </w:rPr>
        <w:t>{{{$$1}}}{{{$$2}}}
        </w:t>
    </w:r>
	`,
	latexTemplate: '{{#$3}} {{#$4}} \\yongyouwari{ {{{$1}}} }{ {{{$2}}} }{ {{{$3}}} }{ {{{$4}}} } {{/$4}} {{^$4}} \\sangyouwari{ {{{$1}}} }{ {{{$2}}} }{ {{{$3}}} } {{/$4}} {{/$3}} {{^$3}}\\sougyou{ {{{$1}}} }{ {{{$2}}} } {{/$3}}'
};

export default Warigaki;
