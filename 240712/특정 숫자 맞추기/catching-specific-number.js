const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let n = 0, i = 0;

for (;;) {
    n = input[i];
    i++;
    if (n === 25) {
        console.log('Good');
        break;
    };

    console.log(n > 25 ? 'Lower' : 'Higher');
}