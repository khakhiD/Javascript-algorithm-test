const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, b] = n;
let result = [];

while (a <= b) {
    result.push(a);
    a += 2;
}

console.log(result.join(' '));