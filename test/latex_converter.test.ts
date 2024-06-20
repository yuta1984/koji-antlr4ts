import { parse, convertToLaTeX } from '../src';
import * as chai from 'chai';

const expect = chai.expect;

const case2 = `
漢-文
`;
const case1 = `左右ルビのついた漢字を入力（にゅうりょく｜インプット）できます
《圏点：圏点が付される文》
見せ消ちはこのように書けます《見せ消ち：訂正前の文｜訂正後の文》
読めない□□文字■■
複数行の割書ができます《割書：一行目｜二行目｜三行目｜四行目》
【訓点の書き方】
逐（ヲツ）￣テ＿レ吹（カセ）￣ヲ潛￣カニ開￣ク不（ス）＿レ待￣タ＿二芳（ハウ）菲（ヒ）￣ノ之候（コウ）￣ヲ＿一　迎（ムカヘ）￣テ＿レ春￣ヲ乍（タチマ）￣チ変￣ス
`;

const ast = parse(case1).ast;

describe('latex converter', () => {
  it('should be valid', () => {
    const latex = convertToLaTeX(ast);
    console.log(latex);
  });
});
