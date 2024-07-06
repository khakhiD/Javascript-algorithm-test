const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n').map(i => +i);

const a = input[0] + 87;
const b = input[1] % 10;

console.log(a);
console.log(b);