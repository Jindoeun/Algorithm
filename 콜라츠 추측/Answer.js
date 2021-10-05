function solution1(num) {
    for(var i = 1; i <= 500; i++) {
        if(num == 1) return i-1;
        num % 2 ? num = (num * 3 + 1): num = num / 2;
    }
    return -1;
}

function solution2(num) {
    var answer = 0;
    while(answer <= 500) {
        if(num == 1) return answer;
        num % 2 ? num = (num * 3 + 1): num = num / 2;
        answer++;
    }
    return -1;
}

// old
function old(num) {
    for(var i = 0; i <= 500; i++){
        if(num % 2 == 0){ // 짝수
            num = num/2;
        } else if(num % 2 != 0 && num != 1){ // 홀수이면서 1이 아닐 때
            num = num * 3 + 1;
        } else{ // 1일 때
            return i;
        }
    }

    return -1;
}


// other people
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) => 
    (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
