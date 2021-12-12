function solution(arr){
  var answer = [arr[0]];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i-1] != arr[i]) answer.push(arr[i]);
  }
  return answer;
}


// old
function old(arr){
	var answer = [arr[0]];
  for(var i = 1; i < arr.length; i++){
    if(arr[i-1] !== arr[i]){
      answer.push(arr[i]);
    }
  }

  return answer;
}


// other people
function other(arr) {
  return arr.filter((val,index) => val != arr[index+1]);
}