const fs = require('fs');
const ft = 30.48;

let input = Number(fs.readFileSync(0).toString());
let result = (input * ft).toFixed(1);
console.log(result);