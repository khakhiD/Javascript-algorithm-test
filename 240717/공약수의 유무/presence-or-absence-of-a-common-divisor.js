const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];

for (let i = a; i <= b; i++) {
    if (1920 % i === 0 && 2880 % i === 0) {
        console.log(1);
        break;
    } else if (i === b) {
        console.log(0);
    } else {
        continue;
    }
};