function solution(num) {
  return num % 2 == 0 ? 'Even' : 'Odd';
}

// old
function old(num) {
	var answer;
	num = parseInt(num);
	
	if(num == 0){ //0
		answer = 'Even';
	} else if(num%2 == 0){ //짝수
		answer = 'Even';
	} else{ //홀수
		answer = 'Odd';
	}
	
	return answer;
}

// other people
function other1(num) {
  return num % 2 ? 'Odd' : 'Even';
}