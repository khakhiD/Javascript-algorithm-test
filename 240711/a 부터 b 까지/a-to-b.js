const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, b] = input;

const calcaulate = (number) => {
    if (number % 2 === 0) {
        return number + 3;
    } else {
        return number * 2;
    }
}

let result = [];


for (let i = a; i <= b; i = calcaulate(i)) {
    result.push(i);
}

console.log(result.join(' '));