const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const CallNumber = ['John', 'Tom', 'Paul', 'Sam'];

for (let i = 0; i < input.length; i++) {
    const number = input[i];
    if (number >= 5) {
        console.log('Vacancy');
        break;
    }
    console.log(CallNumber[number - 1]);
}