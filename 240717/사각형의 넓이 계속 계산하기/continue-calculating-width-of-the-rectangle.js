const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let i = 0;

while(true) {
    let j = 0;
    const line = input[i].split(' ');
    console.log(Number(line[j]) * Number(line[j+1]));
    if (line[j+2] === 'C') break;
    i++;
};