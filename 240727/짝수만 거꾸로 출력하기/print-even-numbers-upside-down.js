const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let evenNumbers = input.filter(i => i % 2 === 0).reverse();

console.log(evenNumbers.join(' '));