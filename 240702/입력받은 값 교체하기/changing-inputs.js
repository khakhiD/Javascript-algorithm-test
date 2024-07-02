const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split(' ').map((i) => Number(i));
let a = arr[0];
let b = arr[1];

console.log(`${b} ${a}`);