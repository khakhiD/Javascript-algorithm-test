const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const isDivided2or3or5 = (n) => n % 2 === 0 || n % 3 === 0 | n % 5 === 0;

let count = 0;

for (let i = 1; i <= input; i++) {
    if (!isDivided2or3or5(i)) count++;
}

console.log(count);