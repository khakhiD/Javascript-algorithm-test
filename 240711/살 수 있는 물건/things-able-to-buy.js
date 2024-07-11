const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

const menu = [
    {name: 'book', expense: 3000},
    {name: 'mask', expense: 1000}
];

const findAffordItem  = (items, budget) => {
    const item = items.find(item => budget >= item.expense);
    return item ? item.name : 'no';
}

const result = findAffordItem(menu, input);

console.log(result);