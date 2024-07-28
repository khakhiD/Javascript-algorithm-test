const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

const gugudan = (n) => {
    for (let i = 1; i <= n; i++) {
        str = "";
        for (let j = 1; j <= n; j++) {
            str += `${i} * ${j} = ${i*j}`;
            if (j < n) {
                str += ", ";
            }
        }
        console.log(str);
    }
}

gugudan(n);