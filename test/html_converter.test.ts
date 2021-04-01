import { parse, convertToHTML } from '../src';
import { expect } from 'chai';
import { ConversionRule } from '../src/converter/KojiConverter';

const case1 = `％表紙
安政二改正
大日本神代ヨリ　　《囲い書き：禁売 》
《題：地震年代記》
浪花　文麗堂藏板

％序文
＜ことし安政二年卯十月二日＞人定（にんてい）にいたり希有（けう）の大地動（おほぢしん）あり倉屋（さうをや）悉（こと〳〵）く損（そこな）はれ
人畜（にんちく）の傷體（けが）許多（あまた）なれば貴賎（きせん）上下神（たましひ）を失（うしな）ひ恐怖（きようふ）せざるものなししかるに名（な）
だゝる神社佛閣（しんじやふつかく）にいたりては十に九ツ恙（つつが）なきは奇（あや）しくもいと尊（たふと）し仰（あふ）かざらめや
敬（けい）せざらめや《史料：埃嚢鈔（あいのうせう）《割書：十四｜巻》》に地震動の吉凶（きつきよう）を知（し）る法（ほう）を載（のせ）たりこれによるに《日時：十月
二日》は二十八宿の虚宿（きょしゆく）に値（あへ）り時（とき）は＜亥刻（ゐのこく）＞なり佛説（ぶつせつ）に此日此時の地震（ぢしん）を帝釈動（たいしやくゆり）と
称（とな）へて其徴（そのしるし）は天下（てんか）安穩（あんおん）五穀（ごこく）豊饒（ぶねう）天子（てんし）吉大臣（きつだいじん）福（ふく）を受（うけ）万民（はんみん）安穩（あんをん）也（なり）としるせり火神動（くわじんゆり）
龍神動（りうじんゆり）金翅鳥動（こんしてうゆり）と震動（ぢしん）に四種（ししゆ）ある事 大智度論（たいちどろん）に出て帝釈動（たいしやくゆり）の外（ほか）は皆（みな）凶兆（きようてう）なり大
鯰（なまづ）の所為（わざ）といふも金翅鳥動（こんしてうゆり）の類（たぐひ）なるべし兔（と）にも角（かく）にもいとめてたき世直（よなほ）しにこそ此一小冊（このいつせうさつ）は
上代（じやうだい）よりの地震（ぢしん）を古今（ここん）の書籍（しよぢやく）より鈔略（せうりやく）取詮（しゆせん）して今度（こんど）のにいくらも勝（まさ）る地震 数十度（すじふど）
ありしかど世（よ）の衰獘（すゐへい）するにもあらず弥栄（いやさか）えにさかえて天地（あめつち）と共（とも）に窮（きはま）りなき我葦原（わがあしはら）
の中国（なかつくに）の泰平（たいへい）万々歳（ばん〳〵ぜい）たるよしを人々に知（し）らせ参（まゐ）らせんとて
｛無名氏識｝`;

describe('html converter', () => {
	it('should convert case1 without any error', () => {
		let ast = parse(case1).ast;
		convertToHTML(ast);
		let fn = () => {
			convertToHTML(ast);
		};
		expect(fn).not.to.throw();
	});

	it('should be able to convert warigaki with more than three lines', () => {
		const src = '《割書：１行目｜２行目｜３行目》';
		const ast = parse(src).ast;
		const html = convertToHTML(ast);
		expect(html).to.contain('<span class="warigaki-line">３行目</span>');
	});

	it('should be able to convert kenten', () => {
		const src = '《圏点：テキスト｜﹅》';
		const ast = parse(src).ast;
		const html = convertToHTML(ast);
		expect(html).to.contain("text-emphasis: '﹅';");
	});

	it('should be able to convert misekechi', () => {
		const src = '《見せ消ち：訂正前｜訂正後》';
		const ast = parse(src).ast;
		const html = convertToHTML(ast);
		expect(html).to.contain('<ruby');
	});

	it('should be able to convert annotation', () => {
		const src = '【コメント】';
		const ast = parse(src).ast;
		const html = convertToHTML(ast);
		expect(html).to.contain('<span  class="Annotation ">【コメント】</span>');
	});

	it('should convert ast with an additional conversion rule', () => {
		const kakoigaki: ConversionRule = {
			elemName: '箱',
			type: 'inline',
			doc: 'テスト',
			example: 'テスト',
			textTemplate: '{{$text}}',
			htmlTemplate: `<span {{{$htmlId}}} class="box {{{$classes}}}">{{$1}}</span>`,
			xmlTemplate: `<span rend="box">{{$1}}</span>`,
			docxTemplate: ``
		};
		const ast = parse('《箱#id*class1*class2：ホゲホゲ》').ast;
		const html = convertToHTML(ast, { rules: [kakoigaki] });
		expect(html).to.contain('<span id="id" class="box class1 class2">ホゲホゲ</span>');
	});

	it('should convert ast with an additional conversion rule having two contents', () => {
		const kakoigaki: ConversionRule = {
			elemName: 'ハイフン',
			type: 'inline',
			doc: 'テスト',
			example: 'テスト',
			textTemplate: '{{$text}}',
			htmlTemplate: `<span {{{$htmlId}}} class="connected {{{$classes}}}">{{$1}}-{{$2}}</span>`,
			xmlTemplate: `<span rend="tateten">{{$1}}</span>`,
			docxTemplate: ``
		};
		const ast = parse('《ハイフン#id*class1*class2：ホゲホゲ｜フガフガ》').ast;
		const html = convertToHTML(ast, { rules: [kakoigaki] });
		expect(html).to.contain('<span id="id" class="connected class1 class2">ホゲホゲ-フガフガ</span>');
	});

	it('should raise error if invalid conversion rule is given', () => {
		const kakoigaki: ConversionRule = {
			elemName: 'ハイフン',
			type: 'inline',
			doc: null,
			example: 'テスト',
			textTemplate: '{{$text}}',
			htmlTemplate: `<span {{{$htmlId}}} class="connected {{{$classes}}}">{{$1}}-{{$2}}</span>`,
			xmlTemplate: `<span rend="tateten">{{$1}}</span>`,
			docxTemplate: ``
		};
		const ast = parse('《ハイフン#id*class1*class2：ホゲホゲ｜フガフガ》').ast;
		const func = () => convertToHTML(ast, { rules: [kakoigaki] });
		expect(func).to.throw(Error);
	});
});
