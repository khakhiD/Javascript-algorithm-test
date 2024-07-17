const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const isEven = (number) => number % 2 === 0 ? true : false;
let index = 0, count = 1;

while(true) {
    if (count > 3) break;
    if (isEven(input[index])) {
        console.log(parseInt(input[index] / 2));
        count++;
    };
    index++;
};