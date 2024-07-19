const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let stars = '';

for (let i = 0; i < n; i++) {
    stars += '*';
}

for (let i = 0; i < n; i++) {
    console.log(stars);
}