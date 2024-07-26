const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let even = [];

input.slice(1).forEach(num => {
    if (num % 2 === 0) {
        even.push(num);
    }
})

console.log(even.reverse().join(" "));