const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let scores = input[1].split(" ").map(Number);
let sum = 0, avg = 0, grade = '';

scores.forEach(i => sum += i);
avg = (sum / scores.length).toFixed(1);
grade = avg >= 4.0 ? 'Perfect' : avg >= 3.0 ? 'Good' : 'Poor';

console.log(`${avg}\n${grade}`);