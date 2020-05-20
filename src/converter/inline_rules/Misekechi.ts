import { ConversionRule } from '../KojiConverter';

const Kenten: ConversionRule = {
	elemName: '見せ消ち',
	type: 'inline',
	doc: '',
	example: '《見せ消ち：訂正された箇所｜追記された箇所》',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$2}}（見せ消ち：{{$1}}）',
	htmlTemplate: `
    <ruby {{{$htmlId}}} class="Misekechi {{$classes}}">
        <rb><del>{{$1}}</del></rb>
        {{#$2}}
        <rt>{{$2}}</rt>
        {{/$2}}        
    </ruby>`,
	xmlTemplate: `
    <del rend="overstrike">{{$1}}</del>
    {{#$2}}
    <add place="right">{{$2}}</add>
    {{/$2}}`
};

export default Kenten;
