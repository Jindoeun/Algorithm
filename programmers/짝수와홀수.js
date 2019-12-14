function solution(num) {
	var answer;
	num = parseInt(num);
	
	if(num == 0){ //0
		answer = 'Even';
	} else if(num%2 == 0){ //짝수
		answer = 'Even';
	} else{ //홀수
		answer = 'Odd';
	}
	
	console.log(num, answer);
	return answer;
}

solution('2.97ms');