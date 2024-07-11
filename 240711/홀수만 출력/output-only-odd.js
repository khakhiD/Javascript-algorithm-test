const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a, b] = input;

let array = [];

for (let i = a; i <= b; i++) {
    array.push(i);
}

const result = array.filter(i => i % 2 !== 0);

console.log(result.join(' '));