const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let maxNum = -1;

for (let number of numbers) {
    if (maxNum < number) {
        let count = 0;

        for (let num of numbers) {
            if (num === number) {
                count += 1;
            }
        }

        if (count === 1) {
            maxNum = number;
        }
    }
}

console.log(maxNum);