function solution(n) {
	var answer = '';

	for(var x=1; x<=n; x++){
		if(x%2 == 1){ //홀수
			answer = answer + '수';
		} else if(x%2 == 0){ //짝수
			answer = answer + '박';
		}
	}
	
	console.log(answer);
	return answer;
}
solution(-3062);