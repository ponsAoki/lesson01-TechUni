//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;

const num = result[0]

for (let i = 1; i <= num; i++) {
    const empRep = " ".repeat(num - i)
    const starRep = "*".repeat(2 * i - 1)
    console.log(empRep + starRep + empRep);
}