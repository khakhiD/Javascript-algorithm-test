const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let number = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        number.push(arr[i]);
    } else {
        break;
    }
}

console.log(number.reverse().join(' '));