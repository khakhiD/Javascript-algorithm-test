const guguStr = (a, b) => `${a} * ${b} = ${a*b}`;

let str = '';

for (let i = 1; i <= 19; i++) {
    str = '';

    for (let j = 1; j <= 19; j++) {
        str += guguStr(i, j);

        if (j % 2 === 0) {
            str += '\n';
        } else if (j !== 19) {
            str += ' / ';
        }
    }
    console.log(str);
}