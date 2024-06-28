const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

function process(n) {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            str += j + 1;
        }
        console.log(str);
    }
}

process(n);