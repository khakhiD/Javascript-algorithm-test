const fs = require('fs');
let year = Number(fs.readFileSync(0).toString().trim());

const isLeafYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            }
            return false;
        }
        return true;
    }
    return false;
}

let count = 0;

for (let i = 1; i <= year; i++) {
    if (isLeafYear(i)) count+= 1;
}

console.log(count);