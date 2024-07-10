const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(i => Number(i));

const h = input[0] / 100;
const w = input[1];

const bmi = parseInt(w / h ** 2);

console.log(bmi);

if (bmi > 25) {
    console.log('Obesity');
}