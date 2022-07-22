// //commanderモジュールをprogramとしてインポートとする
// const program = require("commander");
// //コマンドライン引数をcommanderでパースする
// program.parse(process.argv);

// // ファイルパスをprogram.args配列から取り出す
// const lines = program.args;
// console.log(lines[0]);

const d1 = "2020/06/22 12:02:06"
const d2 = "2020/06/22 13:01:01"
const d3 = "2020/06/22 12:03:00"
const dArr = []
dArr.push(d1)
dArr.push(d2)
dArr.push(d3)
console.log(dArr);
const sortedArr = dArr.sort((a, b) => new Date(a) - new Date(b))
console.log(sortedArr);







function main(input) {
    const lines = input.split("\n")
        //console.log(lines[1])
    const stepNum = lines[0]
    const n = parseInt(lines[1])
    let IdArr = lines.slice(2, 2 + n)
        //console.log(IdArr)
    if (stepNum == 1) {
        for (let i = 1; i <= n + 2; i++) {
            const eventI = n + 1 + i
            if (lines[eventI].match("enter")) {
                //console.log(lines[n+1+i])
                const enterArr = lines[eventI].split(" ")
                    //console.log(enterArr[3])
                if (IdArr.indexOf(enterArr[3]) != -1) {
                    console.log("can")
                } else if (IdArr.indexOf(enterArr[3]) == -1) {
                    console.log("cannot")
                }
            }
            if (lines[eventI].match("issue")) {
                const issueArr = lines[eventI].split(" ")
                const newId = issueArr[1]
                IdArr.push(newId)
                console.log(IdArr)
            }
            if (lines[eventI].match("disable")) {
                const disableArr = lines[eventI].split(" ")
                const disabledIdIndex = IdArr.indexOf(disableArr[1])
                IdArr.splice(disabledIdIndex, 1)
                console.log(IdArr)
            }
        }

    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))