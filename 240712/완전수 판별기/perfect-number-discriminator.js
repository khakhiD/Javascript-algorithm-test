const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const isPerfectNumber = (number) => {
    let result = 0;
    let diviosrArray = getDivisorArray(number);
    
    diviosrArray.forEach(i => {
        result += i;
    })

    return result === number ? 'P' : 'N';
};

const getDivisorArray = (number) => {
    let result = [];
    for (let i=0; i<number; i++) {
        if (number % i === 0) result.push(i);
    }

    return result;
};

console.log(isPerfectNumber(input));