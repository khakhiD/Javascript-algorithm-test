const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [a, b] = input;
let result = 1;

for (let i = 1; i <= b; i++) {
    console.log(i);
    if (a % i === 0) result *= i;
}

console.log(result);