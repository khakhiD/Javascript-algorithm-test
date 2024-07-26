const fs = require('fs');
let n = fs.readFileSync(0).toString().trim()

function print(n) {
    for (let i = n; i > 0; i--) {
        let leftStars = '*'.repeat(i);
        let spaces = ' '.repeat((n - i) * 2);
        let rightStars = '*'.repeat(i);

        console.log(leftStars + spaces + rightStars);
    }
}

print(n);