const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sum = 0;

arr.forEach(val => sum += val);

console.log((sum / arr.length).toFixed(1));