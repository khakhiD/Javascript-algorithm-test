const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = 0

arr.forEach(i => result += i);

console.log(result);