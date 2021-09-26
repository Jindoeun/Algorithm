function solution(v) {
	var answer = [];
	var x = [];
	var y = [];
	
//		for(var i = 0; i < v.length; i++){
//			console.log(v[i][0]);
//		}
	v.forEach(function(e) {
		x.push(e[0]);
		y.push(e[1]);
	});
	x.filter(function(item, pos) {
		if(x.indexOf(item) != pos){
			answer.push(item);
		}
	});
	y.filter(function(item, pos) {
		if(y.indexOf(item) != pos){
			answer.push(item);
		}
	});
	
	console.log(x, y);
	console.log(answer);

	return answer;
}

solution([[1, 4], [3, 4], [1, 10]]);