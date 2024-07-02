const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map((i) => Number(i));

console.log(`${input[0]} ${input[1]} ${input[0] + input[1]}`);