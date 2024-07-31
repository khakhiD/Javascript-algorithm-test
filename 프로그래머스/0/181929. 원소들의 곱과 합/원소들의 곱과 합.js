function solution(num_list) {
    let multiple = 1, sum = 0;
    
    num_list.forEach((i) => {
        sum += i;
        multiple *= i;
    })
    
    return multiple < (sum **2) ? 1 : 0;
}