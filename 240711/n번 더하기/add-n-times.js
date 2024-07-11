const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, n] = input;
let prev = a;

for (let i = 0; i < n; i++) {
    prev = prev + n;
    console.log(prev);
}