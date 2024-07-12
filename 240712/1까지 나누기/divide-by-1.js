const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let count = 0, result = input;
for (let i = 1; i <= input; i++) {
    if (result <= 1) break;
    result = parseInt(result / i);
    count++;
}

console.log(count);