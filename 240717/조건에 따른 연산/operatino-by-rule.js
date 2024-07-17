const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let count = 0;
const isEven = number => number % 2 === 0 ? true : false;

while (true) {
    if (n >= 1000) {
        console.log(count);
        break;
    }
    else if (isEven(n)) {
        n = n * 3 + 1;
    } else {
        n = n * 2 + 2;
    }

    count ++;
};