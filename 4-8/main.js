const str = "こはるはるここはるここはるはるここはるこはるはるはる"

const koharuLen = (str.match(/こはる/g) || []).length
const harukoLen = (str.match(/はるこ/g) || []).length
console.log(`こはる:${koharuLen}`);
console.log(`はるこ:${harukoLen}`);

// let count = [...str].filter(elm => elm === )

const myPass = "slowking199"