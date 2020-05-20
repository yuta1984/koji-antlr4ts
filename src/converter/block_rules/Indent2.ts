import { ConversionRule } from '../KojiConverter';

const Indent2: ConversionRule = {
	elemName: '字下げ二',
	type: 'block',
	doc: '二文字分字下げがある箇所を囲むブロックです',
	example: '％字下げ二\nこの部分が字下げされます\n％',
	textTemplate: '{{$1}}',
	htmlTemplate: `<div {{{$htmlId}}} class="Indent2 {{$classes}}">{{$1}}</div>`,
	xmlTemplate: `<div rend="indent(-2)" {{{$xmlId}}} {{{$xmlSubtypes}}}>$1</div>`
};

export default Indent2;
