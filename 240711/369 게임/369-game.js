const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let i = 1;
let result = [];

function isMultipleOf3 (number) {
   return number % 3 === 0 ? true : false;
}

function is369 (number) {
    const n = number + '';
    return n.includes('3') || n.includes('6') || n.includes('9') ? true : false;
}

while (i <= input) {
    if (isMultipleOf3(i) || is369(i)) {
        result.push(0);
    } else {
        result.push(i);
    }
    i++;
}

console.log(result.join(' '));