function solution(array, height) {
    return array.sort((a, b) => a -b).filter(v => v > height).length;
}