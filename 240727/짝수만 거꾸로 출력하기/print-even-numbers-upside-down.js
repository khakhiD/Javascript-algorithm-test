const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");
let evenNumbers = input.map(Number).filter(i => i % 2 === 0).reverse();

console.log(evenNumbers.join(' '));