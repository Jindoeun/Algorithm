function solution(participant, completion) {
	var answer = participant.filter(function(e){
		return (participant[e] == completion[e]);
	});
	document.write(answer);
	return answer;
}

solution([1, 2, 3, 4, 5], [2, 4]);