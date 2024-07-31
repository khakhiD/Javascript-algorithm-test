function solution(n, control) {
    let arr = [...control];
    let result = n;
    
    const calculateN = (controlString, num) => {
        if (controlString === 'w') num++;
        else if (controlString === 's') num--;
        else if (controlString === 'd') num += 10;
        else if (controlString === 'a') num -= 10;
        
        return num;
    }
    
    arr.forEach(i => {
        result = calculateN(i, result);
    })
    
    return result;
}