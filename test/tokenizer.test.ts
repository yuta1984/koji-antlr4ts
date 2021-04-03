import { tokenize } from '../src';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import { Token } from 'antlr4ts';

const tokenMap = {};
const file = fs.readFileSync(path.resolve(__dirname, '../src/KojiLexer.tokens')).toString();
file.split('\n').forEach((line) => {
	const [name, num] = line.split('=');
	tokenMap[name] = parseInt(num);
});

function assertTokenType(token: Token, typeStr: string) {
	expect(tokenMap[typeStr]).equal(token.type);
}

describe('tokenizer', () => {
	it('will recognize odoriji as Kana', function () {
		const src = '□ほげ〳〵';
		const result = tokenize(src);
		const tokens = result.tokens;
		assertTokenType(tokens[0], 'BugHoleMark');
		assertTokenType(tokens[1], 'Kana');
	});

	it('should only accept ID in [A-z][A-z0-9-_:.]*', function () {
		expect(tokenize('％要素#日本語ID').errors).not.to.be.empty;
		expect(tokenize('％要素#1234').errors).not.to.be.empty;
		expect(tokenize('％要素#valid_id-123').errors).to.be.empty;
	});

	it('should only accept class in [A-z][A-z0-9-_:.]*', function () {
		expect(tokenize('％要素*日本語クラス').errors).not.to.be.empty;
		expect(tokenize('％要素*1234').errors).not.to.be.empty;
		expect(tokenize('％要素*valid:class:123').errors).to.be.empty;
		expect(tokenize('％要素*valid_class-123').errors).to.be.empty;
	});

	it('should recognize dots as non jp char', () => {
		const src = '3/14';
		const result = tokenize(src);
		const tokens = result.tokens;
		assertTokenType(tokens[1], 'NonJpChar');
	});
});
