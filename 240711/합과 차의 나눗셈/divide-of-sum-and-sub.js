const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
const result = ((a+b) / (a-b)).toFixed(2);

console.log(result);