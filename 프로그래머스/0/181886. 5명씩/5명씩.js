function solution(names) {
    let result = [];
    
    for (let i = 1; i <= names.length; i++) {
        if (i % 5 === 1) {
            result.push(names[i-1]);
        }
    }
    
    return result;
}