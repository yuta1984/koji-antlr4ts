import { ConversionRule } from '../KojiConverter';
const Kaeriten: ConversionRule = {
	elemName: '返り点',
	type: 'inline',
	doc: '漢文の送り仮名をマークアップします。',
	example: '｛＿レ｝',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '＿{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Kaeriten {{$classes}}">{{$1}}</span>`,
	xmlTemplate: `<span type="kaeriten" {{{$xmlId}}} {{{$xmlSubtypes}}}>{{$1}}</span>`
};

export default Kaeriten;
