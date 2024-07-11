const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, b] = n;
let result = [];

while (a <= b) {
    result.push(b);
    b -= 2;
}

console.log(result.join(' '));