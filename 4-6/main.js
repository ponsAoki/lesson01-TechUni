//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;
// console.log(result);

//resultを時(h)と分(m)に分割
let [h, m] = result[0].split(":").map(Number)
    // console.log(h);

if (m + 45 >= 60) {
    if (h == 23) {
        h = 0
        m = m + 45 - 60
    } else {
        h += 1;
        m = m + 45 - 60

    }
} else {
    m += 45
}

console.log(h);
console.log(m);