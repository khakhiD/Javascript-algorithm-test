const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let a = input[0], b = input[1], gugu = [];

const isEven = n => n % 2 === 0 ? true : false;
const guguStr = (n, i) => {
    return `${n} * ${i} = ${n*i}`;
}

for (let i = b; i >= a; i--) {
    if (isEven(i)) gugu.push(i);
}

for (let i = 1; i <= 9; i++) {
    let str = '';

    for (let j = 0; j < gugu.length; j++) {
        str += guguStr(gugu[j], i);
        if (j < gugu.length - 1) str += ' / ';
    }

    console.log(str);
}