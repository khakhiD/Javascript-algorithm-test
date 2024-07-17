const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sum = 0, index = 0;

while (true) {
    let age = input[index];

    if (age >= 20 && age < 30) {
        sum += age;
        index++;
    } else {
        console.log((sum / index).toFixed(2));
        break;
    }
};