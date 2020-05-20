import { ConversionRule } from '../KojiConverter';

const Indent3: ConversionRule = {
	elemName: '字下げ三',
	type: 'block',
	doc: '三文字分字下げがある箇所を囲むブロックです',
	example: '％字下げ三\nこの部分が字下げされます\n％',
	textTemplate: '{{$1}}',
	htmlTemplate: `<div {{$htmlId}} class="Indent3 {{$classes}}">{{$1}}</div>`,
	xmlTemplate: `<div rend="indent(-3)" {{$xmlId}} {{$xmlSubtypes}}>$1</div>`
};

export default Indent3;
