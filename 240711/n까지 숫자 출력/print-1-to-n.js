const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let result = [];

while (n >= 1) {
    result.push(n);
    n--;
}

console.log(result.sort((a, b) => a - b).join(' '));