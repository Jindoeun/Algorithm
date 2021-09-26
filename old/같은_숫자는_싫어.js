function solution(arr){
	var answer = [];

	for(var i = 0; i < arr.length; i++){
		if(arr.length > 1 && arr[i] != arr[i+1]){
			answer.push(arr[i]);
		}
		console.log(answer);
	}

	return answer;
}

solution([3, 3, 3, 2, 1, 1, 2]);