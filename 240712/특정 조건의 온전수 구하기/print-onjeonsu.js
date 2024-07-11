const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let result = [];

for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
        continue;
    }
    
    if ((i % 10 === 5)) {
        continue;
    }

    if ((i % 3 === 0) && (i % 9 !== 0)) {
        continue;
    }

    result.push(i);
}

console.log(result.join(' '));