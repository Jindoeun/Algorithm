function solution(arr, divisor) {
  var answer = arr.filter(el => el % divisor == 0);
  // var answer = arr.filter(el => {
  //   if(el % divisor == 0) return el;
  // });
  return answer.length !== 0 ? answer.sort((a, b) => a - b) : [-1];
}


// old
function old(arr, divisor) {
  var answer = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % divisor === 0){
      answer.push(arr[i]);
    }
  }

  answer.sort(function(a, b) {
    return a - b;
  });
  
  if(answer.length === 0){
    answer.push(-1);
  }

  return answer;
}