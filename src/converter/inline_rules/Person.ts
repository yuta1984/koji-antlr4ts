import { ConversionRule } from '../KojiConverter';

const Person: ConversionRule = {
	elemName: '人物',
	type: 'inline',
	doc: '人名をマークアップします。',
	example: '｛大石内蔵助｝',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$1}}',
	htmlTemplate: `<span {{{$htmlId}}} class="Person {{$classes}}">{{$1}}</span>`,
	xmlTemplate: `<persName {{{$xmlId}}} {{{$xmlSubtypes}}}>{{$1}}</persName>`
};

export default Person;
