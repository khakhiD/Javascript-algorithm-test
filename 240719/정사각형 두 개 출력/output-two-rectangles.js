const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let square = [];

for (let i = 0; i < input; i++) {
    let str = '';
    
    for (let j = 0; j < input; j++) {
        str += '*';
    }
    square.push(str);
}

square = square.join('\n');

console.log(square);
console.log('');
console.log(square);