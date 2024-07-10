const fs = require('fs');
let input = fs.readFileSync(0).toString().map(i => Number(i));

console.log(input[0]);

if (input < 0) {
    console.log('minus');
}