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
		<span class="warigaki-line">{{.}}</span>
		{{/$0}}
	</span>
	`,
	xmlTemplate: `
	<span {{{$xmlId}}} type="warigaki" {{{$xmlSubtypes}}}>
		{{#$0}}
		<span>{{.}}</span><lb/>
		{{/$0}}
	</span>
	`
};

export default Warigaki;
