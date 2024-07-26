const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let numArr = [], sum = 0, avg = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 250) {
        break;
    }
    numArr.push(arr[i]);
}

numArr.forEach(i => sum += i);
avg = (sum / numArr.length).toFixed(1);

console.log(sum, avg);