const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let count = 0;

input.map((i) => {
    if (i % 2 === 0) count++;
});

console.log(count);