function solution(my_str, n) {
    let result = [];
    let arr = my_str.split('');
    
    while (arr.length > 0) {
        result.push(arr.splice(0, n).join(''));
    }
    
    return result;
}