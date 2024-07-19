const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let star = [];

for (let i = 0; i < input[0]; i++) {
    star = [];
    for (let j = 0; j < input[1]; j++) {
        star.push('*');
    }
    console.log(star.join(' '));
}