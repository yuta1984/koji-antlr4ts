import { tokenize } from '../src';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import { Token } from 'antlr4ts';

const tokenMap = {};
const file = fs.readFileSync(path.resolve(__dirname, '../src/KojiLexer.tokens')).toString();
file.split('\n').forEach((line) => {
	const [ name, num ] = line.split('=');
	tokenMap[name] = parseInt(num);
});

function assertTokenType(token: Token, typeStr: string) {
	expect(tokenMap[typeStr]).equal(token.type);
}

describe('tokenizer', () => {
	it('will recognize odoriji as Kana', function() {
		const src = '□ほげ〳〵';
		const result = tokenize(src);
		const tokens = result.tokens;
		assertTokenType(tokens[0], 'IllegibleMark');
		assertTokenType(tokens[1], 'Kana');
	});
});
