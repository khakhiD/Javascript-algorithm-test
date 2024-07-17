const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    };

    return a;
}

const divisors = (n) => {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            };
        };
    };
    return result.sort((a, b) => a - b);
}

const divisorsOf1920and2880 = divisors(gcd(1920, 2880));

for (let i = a; i <= b; i++) {
    if (divisorsOf1920and2880.includes(i)) {
        console.log(1);
        break;
    } else {
        if (i === b) break;
        continue;
    }
}