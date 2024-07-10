const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(i => Number(i));
const a = input[0];
const b = input[1];

if (a > b) {
    console.log(a * b);
} else {
    console.log(parseInt(b / a));
}