function solution(s) {
  var answer = '';
  
  if(s.length%2 == 1){ //홀수
    answer = s.substring(Math.floor(s.length/2), Math.ceil(s.length/2));
  } else{ //짝수
    answer = s.substring(s.length/2-1, s.length/2+1);
  }
  
  console.log(answer);
  return answer;
}
	
solution('가나다라마바');