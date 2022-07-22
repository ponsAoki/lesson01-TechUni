//チームラボ
//1

// let count = 0;

// for (let i = 0; i <= 30000000; i++) {
//     if (1234567890 % i === 0) {
//         count += i
//     }
// }

// console.log(count);


//2

// let numArr = [1, 0, 5]
//     let len = numArr.length

// while (numArr.length < 30) {
//     const newNum = numArr[numArr.length - 1] + numArr[numArr.length - 2] + numArr[numArr.length - 3]
//     numArr.push(newNum)
// }

// console.log(numArr[28]);


//3

// let sum = 0
// let N = 1
// while (sum <= 15) {
//     sum += 1 / N;
//     N++
// }
// console.log(N - 1);


//4

// let numArr = [...Array(701)].map((v, i) => i++)
// numArr.splice(0, 1)
// numArr.sort((a, b) => b - a)
//     // console.log(numArr[699]);


// let trackCount = 0
// while (numArr.length > 1) {
//     let weightCount = 0
//     while (weightCount < 5000) {
//         weightCount += numArr[0]
//         numArr.splice(0, 1)
//             // console.log(numArr);
//     }
//     trackCount++
//     console.log(trackCount);
// }
// console.log(5000 * 47);
// console.log(5000 * 47);



//commanderモジュールをprogramとしてインポートとする
const program = require("commander");
//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const result = program.args;

//console.log(result[0]);

let first = result[0].split(",")
const second = result[1]
    // console.log(first, second);

let newFirst = []
first.map(elm => {
    if (elm.toLowerCase().indexOf(second) != -1) {
        newFirst.push(elm.toLowerCase())
    }
})

console.log(newFirst.sort());