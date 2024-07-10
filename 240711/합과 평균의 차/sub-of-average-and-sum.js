const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(i => Number(i));
const sum = input[0] + input[1] + input[2];
const average = parseInt(sum/input.length);

console.log(sum);
console.log(average);
console.log(sum - average);