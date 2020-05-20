import { ConversionRule } from '../KojiConverter';

const Date: ConversionRule = {
	elemName: '日時',
	type: 'inline',
	doc: '日時情報をマークアップします。',
	example: '＜安政二年卯十月二日＞',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Date {{$classes}}">{{{$1}}}</spab>`,
	xmlTemplate: `<date {{{$xmlId}}} {{{$xmlSubType}}}>{{{$1}}}</date>`
};

export default Date;
