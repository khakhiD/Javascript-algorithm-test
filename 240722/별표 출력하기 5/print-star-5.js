const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let index = n;

while (index > 0) {
    let line = '';
    let str = '';

    for (let i = index; i > 0; i--) {
        str += '*';
    }

    for (let i = index; i > 0; i--) {
        line += `${str} `;
    }
    
    console.log(line);
    index--;
}