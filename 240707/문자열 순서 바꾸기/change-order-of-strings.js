const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const s = input[0];
const t = input[1];

console.log(`${t}\n${s}`);