const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const n = input[0];
const array = input.slice(1, n);
const result = array.filter(i => i % 3 === 0 && i % 2 !== 0);

console.log(result.join('\n'));