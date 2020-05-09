import { tokenize, parse } from '../src';
import { expect } from 'chai';
import { KojiASTNode, KojiBlockNode } from '../src/KojiAstBuilder';

describe('ast', function() {
	it('has an array of inline eleemtns', function() {
		const ast = parse('《地名＃ほげ＊ふが.fuga：日本橋》').ast;
		expect(ast).to.have.property('inlines');
		expect(ast.inlines).lengthOf(1);
	});

	it('has an array of parent', function() {
		const ast = parse('｛山田太郎（やまだたろう）｝').ast;
		expect(ast).to.have.property('parens');
		expect(ast.parens[1]).deep.equals({ start: 5, stop: 12 });
		expect(ast.parens[0]).deep.equals({ start: 0, stop: 13 });
	});
});

describe('parser', function() {
	it('recognizes inline element', () => {
		const result = parse('《地名＃ほげ＊ふが.fuga：日本橋》');
		const inline = result.ast.children[0] as KojiASTNode;
		expect(inline.children[0]).equal('日本橋');
		expect(inline.id).equal('ほげ');
		expect(inline.classes).lengthOf(2);
		expect(inline.classes[0]).equal('ふが');
		expect(inline.classes[1]).equal('fuga');
	});

	it('recognizes  block elements', () => {
		const src = `
		％章
		％％節
		％％％段落
		`;
		const result = parse(src);
		const block3 = result.ast.blocks[0] as KojiBlockNode;
		const block2 = result.ast.blocks[1] as KojiBlockNode;
		const block1 = result.ast.blocks[2] as KojiBlockNode;
		expect(result.ast.blocks).lengthOf(3);
		expect(block1.name).equal('章');
		expect(block1.level).equal(1);
		expect(block2.name).equal('節');
		expect(block2.level).equal(2);
		expect(block3.name).equal('段落');
		expect(block3.level).equal(3);
	});

	describe('on handling syntactic sugars', () => {
		it('recognizes furigana element', () => {
			const result = parse('大日本（だいにほん｜ジャパン）');
			const furigana = result.ast.children[0] as KojiASTNode;
			expect(furigana.children[0]).equal('大日本');
			expect(furigana.extra[0]).lengthOf(1);
			expect(furigana.extra[0][0]).equal('だいにほん');
			expect(furigana.extra[1]).lengthOf(1);
			expect(furigana.extra[1][0]).equal('ジャパン');
		});

		it('skips whitespace before furigana', () => {
			const result = parse('地震 年代記（ねんだいき）');
			const furigana = result.ast.children[1] as KojiASTNode;
			expect(furigana.children[0]).equal('年代記');
			expect(furigana.extra[0]).lengthOf(1);
			expect(furigana.extra[0][0]).equal('ねんだいき');
		});

		it('recognizes okurigana and kaeriten', () => {
			const result = parse('逐￣テ＿レ吹￣ヲ潛￣カニ');
			const children = result.ast.children;
			expect(children[0]).equal('逐');
			expect(children[1]).to.have.property('name', '送り仮名');
			expect(children[2]).to.have.property('name', '返り点');
			expect(children[3]).equal('吹');
			expect(children[4]).to.have.property('name', '送り仮名');
		});

		it('recognizes all the kaeriten', () => {
			const kaeriten = 'レ一二三四五六七八九十上中下甲乙丙丁天地人'.split('');
			kaeriten.forEach((k) => {
				const src = `犬＿${k}`;
				const ast = parse(src).ast;
				expect(ast.children[1]).to.have.property('name', '返り点');
			});
		});

		it('recognizes tateten', () => {
			const ast = parse('犬ー猫').ast;
			expect(ast.children[1]).to.have.property('name', '竪点');
		});

		it('recognizes annotation paren', function() {
			const ast = parse('【コメント】').ast;
			expect(ast.children[0]).to.have.property('name', '注釈');
		});

		it('recognizes illegible mark', function() {
			const ast = parse('読めない□□文字').ast;
			const illegible = ast.children[1];
			expect(illegible).to.have.property('name', '難読');
			expect(illegible).to.have.deep.property('children', [ '□□' ]);
		});

		it('recognizes bughole mark', function() {
			const ast = parse('虫損している■■文字').ast;
			const hole = ast.children[1];
			expect(hole).to.have.property('name', '虫損');
			expect(hole).to.have.deep.property('children', [ '■■' ]);
		});

		it('recognizes person expression', function() {
			const ast = parse('ホゲ｛山田太郎｝フガ').ast;
			expect(ast.children[1]).to.have.property('name', '人物');
		});

		it('recognizes date expression', function() {
			const ast = parse('ホゲ＜令和二年五月五日＞フガ').ast;
			expect(ast.children[1]).to.have.property('name', '日時');
		});

		it('recognizes place expression', function() {
			const ast = parse('ホゲ〔日本橋〕フガ').ast;
			expect(ast.children[1]).to.have.property('name', '場所');
		});

		it('recognizes attrs put after person syntactic sugar', function() {
			const result = parse('｛山田太郎｝［＃id_string＊class_string］');
			expect(result.errors).to.be.empty;
			const node = result.ast.children[0];
			expect(node).to.have.property('id', 'id_string');
			expect(node).to.have.deep.property('classes', [ 'class_string' ]);
		});

		it('recognizes attrs put after date syntactic sugar', function() {
			const result = parse('＜一月一日＞［＃id_string＊class_string］');
			expect(result.errors).to.be.empty;
			const node = result.ast.children[0];
			expect(node).to.have.property('id', 'id_string');
			expect(node).to.have.deep.property('classes', [ 'class_string' ]);
		});

		it('recognizes attrs put after place syntactic sugar', function() {
			const result = parse('〔日本橋〕［＃id_string＊class_string］');
			expect(result.errors).to.be.empty;
			const node = result.ast.children[0];
			expect(node).to.have.property('id', 'id_string');
			expect(node).to.have.deep.property('classes', [ 'class_string' ]);
		});
	});
});
