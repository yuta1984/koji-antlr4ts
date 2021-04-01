import { ConversionRule } from '../KojiConverter';

const Date: ConversionRule = {
	elemName: '日時',
	type: 'inline',
	doc: '日時情報をマークアップします。',
	example: '＜安政二年卯十月二日＞',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Date {{$classes}}">{{{$1}}}</span>`,
	xmlTemplate: `<date {{{$xmlId}}} {{{$xmlSubType}}}>{{{$1}}}</date>`,
	docxTemplate: `<w:r><w:rPr><w:rFonts w:hint="eastAsia"/></w:rPr><w:t>{{$$1}}</w:t></w:r>`
};

export default Date;
