const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(i => Number(i));

const w = input[0] + 8;
const h = input[1] * 3;

console.log(w);
console.log(h);
console.log(w*h);