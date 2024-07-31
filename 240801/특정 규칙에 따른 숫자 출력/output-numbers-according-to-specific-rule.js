const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '', num = 1;

for (let i = 0; i < n; i++) {
    str = '';

    for (let j = 0; j < i; j++) {
        str += '  ';
    }

    for (let j = 0; j < n - i; j++) {
        str += `${num} `;
        
        if (num >= 9) {
            num = 1;
        } else {
            num++;
        }
    }

    console.log(str);
}