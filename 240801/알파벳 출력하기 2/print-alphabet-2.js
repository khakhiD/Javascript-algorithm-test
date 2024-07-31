const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let index = 'A'.charCodeAt();
let line = '';

for (let i = 0; i < n; i++) {
    line = '';

    for (let j = 0; j < i; j++) {
        line += '  ';
    }

    for (let j = 0; j < n - i; j++) {
        line += String.fromCharCode(index) + ' ';
        if (String.fromCharCode(index) === 'Z') {
            index = 'A'.charCodeAt();
        } else {
            index++;
        }
    }
    
    console.log(line);
}