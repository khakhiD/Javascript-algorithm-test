const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(i => parseInt(i));

const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(parseInt(a / b));
console.log(a % b);