const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const n = input[0];
const numberArray = input.slice(1, n+1);

let sum = 0;
numberArray.forEach(i => sum += i);

console.log(sum, (sum/n).toFixed(1));