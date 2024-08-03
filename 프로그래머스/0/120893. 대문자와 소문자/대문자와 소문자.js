const isLower = str => {
    let lower = str.toLowerCase();
    return str === lower ? true : false;
}

const solution = my_string => {
    let arr = [...my_string];
    let answer = '';
    
    arr.forEach(v => isLower(v) ? answer += v.toUpperCase() : answer += v.toLowerCase());
    
    return answer;
}
