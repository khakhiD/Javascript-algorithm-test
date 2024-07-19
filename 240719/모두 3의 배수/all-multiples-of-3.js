const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let flag = true;

for (let i = 0; i < input.length; i++) {
    if(input[i] % 3 !== 0) {
        flag = false;
    }
}

console.log(flag ? 1 : 0);