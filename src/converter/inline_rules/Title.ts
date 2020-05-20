import { ConversionRule } from '../KojiConverter';

const Title: ConversionRule = {
	elemName: '題',
	type: 'inline',
	doc: '書状や転籍などの題をマークアップします。',
	example: '《題：地震年代記》',
	minContentCount: 1,
	maxContentCount: 1,
	textTemplate: '{{$1}}',
	htmlTemplate: `<h1 class="Title {{$classes}}" {{$htmlId}}>{{{$1}}}</h1>`,
	xmlTemplate: `<docTitle {{{$xmlId}}} {{{$xmlSubtypes}}}>{{{$1}}}</docTitle>`
};

export default Title;
