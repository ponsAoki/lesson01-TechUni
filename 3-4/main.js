//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;

const A = String(result[0]).split("")
const B = String(result[1]).split("")
    // console.log(A);
const Arev = parseInt(A.reverse().join(""))
const Brev = parseInt(B.reverse().join(""))

console.log(Arev + Brev);