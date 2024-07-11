const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let numbers = Array.from({ length: n }, (_, i) => i + 1);
let result = numbers.join(' ');

console.log(result);