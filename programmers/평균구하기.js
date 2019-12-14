function solution(arr) {
  var answer = 0;
  var sum = 0;
  
  for(var i=0; i<arr.length; i++){
    sum += arr[i];
    answer = sum/arr.length;
  }
  
  console.log(answer);
  return answer;
}

solution([1, 2, 3]);