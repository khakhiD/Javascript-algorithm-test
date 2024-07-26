const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let number = [];

arr.forEach((val) => {
    if (val !== 0) {
        number.push(val);
    } else {
        return false;
    }
});

console.log(number.reverse().join(' '));