const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let divisors = [], isPrimeNumber = false;

for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
        divisors.push(i);
    }
}

if (divisors.length === 2 && divisors.includes(1) && divisors.includes(n)) {
    isPrimeNumber = true;
}

console.log(isPrimeNumber ? 'P' : 'C');