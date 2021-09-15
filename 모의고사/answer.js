function solution(answers){
  var answer = [];
  var user1 = [1, 2, 3, 4, 5];
  var user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var num = [0, 0, 0];

  for(var i = 0; i < answers.length; i++){
    if(user1[i % user1.length] == answers[i]) num[0]++;
    if(user2[i % user2.length] == answers[i]) num[1]++;
    if(user3[i % user3.length] == answers[i]) num[2]++;
  }

  var max = Math.max.apply(null, num);

  for(var i = 0; i < num.length; i++){
    if(num[i]	=== max) answer.push(i+1);
  }

  return answer;
}