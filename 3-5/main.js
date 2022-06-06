const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60]

//studentsの中身を降順に
students.sort((a, b) => a - b)

//studentsの中身を10で割った時の商のarrayに
const map = students.map(x => parseInt(x / 10))

//mapの要素の種類のカウント入れるための配列
const counts = {}

//mapの中の要素の種類数える
for (const num of map) {
    counts[num] = counts[num] ? counts[num] + 1 : 1
}

//countsのkey取り出す
const keyArr = Object.keys(counts)

//度数が3, 2, 1の順でfor文
for (let i = 3; i > 0; i -= 1) {
    let resStr = " "
        //各度数の値において点数の各位が当てはまれば" * "、そうでなければ" " *3置いていく
    for (let k = 1; k <= keyArr.length; k++) {
        if (counts[k] >= i) {
            const star = " * "
            resStr += star
        } else {
            const empty = " "
            const emptyResult = empty.repeat(3)
            resStr += emptyResult
        }
    }
    console.log(resStr);
}

//線いっぱい
console.log("-".repeat(34));

//点数の位0~100
let numArr = [...Array(11)].map((v, i) => i * 10)
numArr = numArr.join(" ")
console.log(numArr);