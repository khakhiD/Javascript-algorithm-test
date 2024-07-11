const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [b, a] = n;
let result = [];

while (b >= a) {
    result.push(b);
    b -= 2;
}

console.log(result.join(' '));