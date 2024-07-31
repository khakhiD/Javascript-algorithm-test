const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let str = '';
const guguStr = (a, b) => `${a} * ${b} = ${a*b}`;

for (let i = 1; i <= n; i++) {
    str = '';

    for (let j = 1; j <= n + 1 - i; j++) {
        str += guguStr(i, j);
        
        if (j !== n + 1 - i) {
            str += ' / '
        }
    }

    console.log(str);
}