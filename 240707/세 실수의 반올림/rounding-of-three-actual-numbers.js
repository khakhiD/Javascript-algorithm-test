const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n').map(i => Number(i).toFixed(3));

console.log(`${input[0]}
${input[1]}
${input[2]}`);