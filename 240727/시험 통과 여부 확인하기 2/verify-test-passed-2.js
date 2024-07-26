const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let scores = input.slice(1).map(i => i.split(' '));

let sum = 0, avg = 0, cnt = 0;

for (let i = 0; i < n; i++) {
    sum = 0;
    scores[i].forEach(val => sum += Number(val))
    avg = (sum / scores[i].length)

    if (avg >= 60) {
        console.log('pass');
        cnt++;
    } else {
        console.log('fail');
    }
}

console.log(cnt);