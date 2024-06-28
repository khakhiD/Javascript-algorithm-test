const fs = require('fs');
let n = fs.readFileSync(0).toString();
let str = ""

for (let i=0; i<n; i++) {
    str = ""
    for (let j = 0; j < n; j++) {
        str += i + 1;
    }
    console.log(str);
}