const solution = s => {
    let str = s.split(' ');
    let temp = Number(str[0]);
    let result = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'Z') {
            result -= Number(temp);
        } else {
            result += Number(str[i]);
        }
        
        temp = str[i];
    }
    
    return result;
}
