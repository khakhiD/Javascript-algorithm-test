const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

console.log(input.filter(i => i % 2 !== 0).length);