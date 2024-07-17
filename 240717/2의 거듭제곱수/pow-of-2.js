const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let i = 0;

while (true) {
    if (n === 2 ** i) {
        console.log(i);
        break;
    }
    
    i++;
}