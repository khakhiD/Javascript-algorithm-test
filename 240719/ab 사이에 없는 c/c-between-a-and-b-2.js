const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let a = input[0];
let b = input[1];
let c = input[2];
let flag = false;

for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        flag = true;
        continue;
    }
}

console.log(flag ? 'NO' : 'YES');