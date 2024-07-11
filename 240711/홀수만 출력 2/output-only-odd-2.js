const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);
let [b, a] = input;

const result = Array.from({ length: Math.floor((b - a) / 2) + 1}, (_, i) => b - (i*2));

console.log(result.join(' '));