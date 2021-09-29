function solution(arr) {
    return arr.reduce((acc, cur, index) => {
        if(index >= arr.length -1) return (acc + cur) / arr.length;
        return acc += cur;
    });
}