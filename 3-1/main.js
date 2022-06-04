let firstLine = [...Array(9)].map((v, i) => i + 1)
    // console.log(firstLine);

for (let i = 1; i < 10; i++) {
    const allLine = firstLine.map(val => val * i)
    const result = allLine.join(" ")
    console.log(result);
}