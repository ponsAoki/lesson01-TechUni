//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;

// console.log(result);

//resultを降順
const sortNum = result.sort((a, b) => b - a)
console.log(sortNum[2]);