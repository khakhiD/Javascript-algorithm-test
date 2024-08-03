function solution(cipher, code) {
    let answer = '';
    let arr = [...cipher];
    
    arr.forEach((v, i) => {
        if ((i+1) % code === 0) answer += v;
    })
    
    return answer;
}