const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let count = 0;

const isEven = number => number % 2 === 0 ? true : false;

while (true) {
    if (n === 1) {
        break;
    } else if (isEven(n)) {
        n = parseInt(n/2);
    } else {
        n = (n*3) + 1;
    }

    count++;
};

console.log(count);