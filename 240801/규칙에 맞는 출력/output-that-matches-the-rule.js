const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for (let i = n; i >= 1; i--) {
    str = '';

    for (let j = i; j <= n; j++) {
        str += `${j} `;
    }

    console.log(str);
}