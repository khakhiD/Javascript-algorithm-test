const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const n = input[0];
const array = input.slice(1, n + 1);

function isCondition (number) {
    return number % 3 === 0 && number % 2 !== 0 ? true : false;
}

for (let i = 0; i < n; i++) {
    if (isCondition(array[i])) console.log(array[i]);
}