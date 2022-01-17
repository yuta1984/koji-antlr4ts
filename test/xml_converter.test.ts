import { parse, convertToXML, convertToTEI } from '../src';
import { expect, use } from 'chai';
import * as chaiXml from 'chai-xml';
use(chaiXml);

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

describe('tei converter', () => {
	const src = 'ほげほげ';
	const ast = parse(src).ast;
	const xml = convertToTEI(ast);
	expect(xml).xml.to.deep.equal(`
<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng" type="application/xml"
	schematypens="http://purl.oclc.org/dsdl/schematron"?>
<?xml-model href="../../%E6%B3%95%E5%AE%9D%E7%BE%A9%E6%9E%97/tei_all_ja_421/document.rnc" type="application/relax-ng-compact-syntax"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
   <teiHeader>
      <fileDesc>
         <titleStmt>
            <title>Title</title>
         </titleStmt>
         <publicationStmt>
            <p>Publication Information</p>
         </publicationStmt>
         <sourceDesc>
            <p>Information about the source</p>
         </sourceDesc>
      </fileDesc>
   </teiHeader>
   <text>ほげほげ</text>
</TEI>
	`);
});

describe('xml converter', () => {
	it('should convert case1 without any errors', () => {
		let ast = parse(case1).ast;
		let fn = () => {
			const xml = convertToXML(ast);
		};
		expect(fn).not.to.throw();
	});


	it('should be valid', () => {
		const src = 'ここにテキストを入力（にゅうりょく｜インプット）';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.be.valid();
	});

	it('should be able to process ruby2', () => {
		const src = '入力（にゅうりょく）';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`
		<text>
            <ruby>
                <rb>入力</rb>
                <rt>にゅうりょく</rt>
            </ruby>
		</text>`);
	});

	it('should be able to process ruby2', () => {
		const src = '入力（にゅうりょく｜インプット）';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`
		<text>
			<ruby>
               	<rb>
			   		<ruby>
                    	<rb>入力</rb>
                     	<rt>にゅうりょく</rt>
               		</ruby>
				</rb>
               <rt>インプット</rt>
            </ruby>
		</text>`);
	});

	it('should able to process 圏点', () => {
		const src = '《圏点：圏点が付される文｜﹅》';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`<text><seg style="text-emphasis: filled sesame">圏点が付される文</seg></text>`);
	});

	it('should able to process 見せ消ち', () => {
		const src = '《見せ消ち：訂正前の文｜訂正後の文》';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`<text><subst>
               <del>訂正前の文</del>
               <add>訂正後の文</add>
            </subst></text>`);
	});

	it('should able to process 割書', () => {
		const src = '《割書：一行目｜二行目｜三行目》';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		//expect(xml).xml.to.deep.equal(`<text><note type="wari">一行目<milestone unit="wrb"/>二行目<milestone unit="wrb"/>三行目<milestone unit="wrb"/></note></text>`);
	});

	it('should able to process 送り仮名', () => {
		const src = '￣ス';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`<text><note type="okuri">ス</note></text>`);
	});

	it('should able to process 返り点', () => {
		const src = '＿レ';
		const ast = parse(src).ast;
		const xml = convertToXML(ast);
		expect(xml).xml.to.deep.equal(`<text><metamark function="kaeriten">レ</metamark></text>`);
	});

});


