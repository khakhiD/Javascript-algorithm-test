const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let multiple = 1;

for (let i=1; i<=10; i++) {
    multiple *= i;
    if (multiple > input) {
        console.log(i);
        break;
    }
}