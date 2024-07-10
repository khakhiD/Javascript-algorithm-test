const fs = require('fs');
let input = fs.readFileSync(0).toString().map(i => Number(i));

console.log(input ** 2);

if (input < 5) {
    console.log(tiny);
}