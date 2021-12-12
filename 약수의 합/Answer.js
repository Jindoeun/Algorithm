function solution(n) {
  var answer = 0;
  
  for(var i = 1; i <= n; i++) {
    if(n % i == 0) answer += i;
  }
  
  return answer;
}


// old
function old1(n) {
  var answer = 0;

  for( var i = 1; i <= n; i++ ){
    if (n/i === parseInt(n/i, 10)){
      answer += n/i;
    }
  }

  return answer;
}