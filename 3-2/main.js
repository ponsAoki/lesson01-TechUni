//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;
console.log(result);
const line = result[0]
const onLine = result[1]

for (let lineI = 1; lineI <= line; lineI++) {
  if (lineI % 2 !== 0 && onLine % 2 !== 0) {
    console.log("*-".repeat(parseInt(onLine/2)) + "*")
  } else if (lineI % 2 !== 0 && onLine % 2 === 0) {
    console.log("*-".repeat(parseInt(onLine/2)));
  } else if (lineI % 2 === 0 && onLine % 2 !== 0) {
    console.log("-*".repeat(parseInt(onLine/2)) + "-");
  } else if (lineI % 2 === 0 && onLine % 2 === 0) {
    console.log("-*".repeat(parseInt(onLine/2)));
  }
}