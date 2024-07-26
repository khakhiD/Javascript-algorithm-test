const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");
let nums = input.slice(1).split(' ').map(Number);
let result = nums.filter(i => i % 2 === 0).reverse().join(' ');

console.log(result);