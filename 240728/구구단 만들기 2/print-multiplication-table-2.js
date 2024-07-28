const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

for (let i = b; i >= a; i--) {
    number.push(i);
}

for (let i = 2; i <= 8; i += 2) {
    str = '';

    for (let j = 0; j < number.length; j++) {
        str += `${number[j]} * ${i} = ${number[j]*i}`;

        if (j < number.length - 1) {
            str += ' / ';
        }
    }
    
    console.log(str);
}