function solution(num_list) {
    let result = num_list;
    let [a, b] = num_list.slice(-2).map(Number);
    
    if (b > a) {
        result.push(b - a);
    } else {
        result.push(b * 2);
    }
    
    return result;
}