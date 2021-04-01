import { ConversionRule } from '../KojiConverter';

const Place: ConversionRule = {
	elemName: '場所',
	type: 'inline',
	doc: '場所情報をマークアップします。',
	example: '〔日本橋〕',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Place {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<placeName {{{$xmlId}}} {{{$xmlSubtypes}}}>{{{$1}}}</placeName>`,
	docxTemplate: `<w:r><w:rPr><w:rFonts w:hint="eastAsia"/></w:rPr><w:t>{{$text}}</w:t></w:r>`
};

export default Place;
