let numArr = [...Array(10)].map((v, i) => i)

// console.log(numArr);

for (let i = numArr.length - 1; i >= 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    let tmp = numArr[i]
    numArr[i] = numArr[r]
    numArr[r] = tmp
}
// console.log(numArr);
numArr = numArr.map(array => String(array))
console.log(numArr.join(" "));