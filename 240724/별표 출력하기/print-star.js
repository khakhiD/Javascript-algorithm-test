const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = [];
    for (let j = 0; j < i; j++) {
        str.push('*');
    }
    console.log(str.join(' '));
}

for (let i = n-1; i > 0; i--) {
    let str = [];
    for (let j = 0; j < i; j++) {
        str.push('*');
    }
    console.log(str.join(' '));
}