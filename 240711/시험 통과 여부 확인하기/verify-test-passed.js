const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input > 80) {
    console.log('pass');
} else {
    const neededScore = 80 - input;
    console.log(`${neededScore} more score`);
}