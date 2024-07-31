const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let line = '';
let index = 'A'.charCodeAt();

for (let i = 1; i <= n; i++) {
    line = '';

    for (let j = 1; j <= i; j++) {
        line += String.fromCharCode(index);
        
        if (index === 'Z'.charCodeAt()) {
            index = 'A'.charCodeAt();
        } else {
            index++;
        }
    }

    console.log(line);
}