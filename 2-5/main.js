//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;
// console.log(result);

let number = parseInt(result[0])
    // console.log(String(number).length);
    // let numLen = String(number).length
    // console.log(number);
    // const min = 0
    // let a = Math.random() + min
    // let b = Math.random() + min
    // let c = Math.random() + min
const arr = []
for (let a = 0; 100 * a <= number; a++) {
    for (let b = 0; 10 * b <= number; b++) {
        for (let c = 0; 1 * c <= number; c++) {
            if ((100 * a + 10 * b + 1 * c) == number && a > b && b > c) {
                const sum = a + b + c;
                arr.push({sum: sum, a: a, b: b, c: c})
                // const MinSum = Math.min(sum)
                    // const min = Math.min(a)
                // console.log(arr);
            }

        }

    }
}
const minSum = arr[arr.length - 1].sum
const A = arr[arr.length - 1].a
const B = arr[arr.length - 1].b
const C = arr[arr.length - 1].a
// const minArr = Math.min(...arr[sum])
console.log(minSum);
// console.log(Math.min(...arr));
