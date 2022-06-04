//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;
// console.log(result);

let number = parseInt(result[0])

const arr = []
const sumArr = []
const AllCal = () => {
        try {
            for (let a = 0; 100 * a <= number; a++) {
                for (let b = 0; 10 * b <= number; b++) {
                    for (let c = 0; 1 * c <= number; c++) {
                        if ((100 * a + 10 * b + 1 * c) == number) {
                            const sum = a + b + c
                            arr.push({ sum: sum, a: a, b: b, c: c })
                            sumArr.push(sum)
                        }
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    // console.log(sumArr);
AllCal();
const minSum = Math.min(...sumArr)
    // console.log(minSum);
arr.forEach(object => {
    if (object.sum === minSum) {
        console.log("100円玉" + object.a + "枚、" + "10円玉" + object.b + "枚、" + "1円玉" + object.c + "枚");
    }
})