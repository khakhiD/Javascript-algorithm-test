const fs = require('fs');
let a = Number(fs.readFileSync(0).toString());
let result = (a + 1.5).toFixed(2);

console.log(result);