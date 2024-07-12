const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let i = 0, n = 0;

while (true) {
    n = input[i];
    if (n === 0) break;
    console.log(n);
    i++;
};