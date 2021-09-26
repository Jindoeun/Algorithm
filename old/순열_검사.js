function solution(arr, n) {
	var answer = true;
	n = arr.length;
	var arr2 = [];

	for(var i=1; i<=n; i++){
		arr2.push(i);
	}
	
	for(var i=0; i<n; i++){
		if(arr2.indexOf(arr[i]) != -1){
			arr2.splice(arr2.indexOf(arr[i]), 1);
		}
	}

	if(arr2 != ''){
		answer = false;
	}
	
	return answer;
}


solution([3, 1, 2]);