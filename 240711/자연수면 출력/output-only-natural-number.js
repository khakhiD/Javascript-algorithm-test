const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a, b] = n;
let result = '';

if (a > 0) {
    for(let i=0; i<b; i++) {
        result += a + "";
    }
}

console.log(result.length > 0 ? result : '0');