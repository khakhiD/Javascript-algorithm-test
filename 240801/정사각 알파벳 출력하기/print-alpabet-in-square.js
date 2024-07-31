const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let line = '', index = 'A'.charCodeAt();

for (let i = 1; i <= n; i++) {
    line = '';

    for (let j = 1; j <= n; j++) {
        line += String.fromCharCode(index);
        index++;
    }
    
    console.log(line);
}