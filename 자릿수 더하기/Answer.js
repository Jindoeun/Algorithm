function solution1(n){
	return (n+"").split("").reduce((acc, cur) => acc += (cur*1), 0);
}

function solution2(n){
	var answer = 0;
	var str = n+"";
	
	 for(var i = 0; i < str.length; i++) {
		answer += str[i]*1;
	}

	return answer;
}

// old
function old1(n){
	var answer = 0;
	for(var i = 0; i < String(n).length; i++){
		answer += Number(String(n)[i]);
	}

	return answer;
}

// other people
function other1(num) {
  return num % 2 ? 'Odd' : 'Even';
}