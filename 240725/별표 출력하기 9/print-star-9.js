const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());
let str = '';

for (let i = 0; i < n; i++) {
    str = '';
    
    // 쌍따옴표를 쓰면 정답, 따옴표를 쓰면 오답처리됨
    // 왜 그런지 알아보자.
    for (let j = n - i; j > 1; j--) {
        str += "  ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        str += "* ";
    }
    console.log(str);

}