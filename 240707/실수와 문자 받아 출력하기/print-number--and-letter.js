const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const a = input[0].trim();
const b = Number(input[1]).toFixed(2);
const c = Number(input[2]).toFixed(2);

console.log(`${a}\n${b}\n${c}`);