const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b] = input;
let result = 0;

for (let i = a; i <= b; i++) {
    if (i % b === 0) result *= i;
}

console.log(result);