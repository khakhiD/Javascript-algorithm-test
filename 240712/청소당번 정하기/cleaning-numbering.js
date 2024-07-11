const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let classroom = 0, hallway = 0, restroom = 0;

for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) {
        restroom += 1;
    }
    else if (i % 3 === 0) {
        hallway += 1;
    }
    else if (i % 2 === 0) {
        classroom += 1;
    }
}

console.log(classroom, hallway, restroom);