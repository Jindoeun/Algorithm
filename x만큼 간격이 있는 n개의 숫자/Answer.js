function solution1(x, n) { // 효율성 2등
  var answer = [];

  for(var i = 1; i <= n; i++){
    answer[i-1] = x * i;
  }

  return answer;
}

function solution2(x, n) { // 효율성 3등 // fill IE에서 작동X
  return Array(n).fill(x).map((v, i) => (i + 1) * v);
}


// old
function old(x, n) { // 효율성 1등
  var answer = [];

  for(var i = 1; i <= n; i++){
    answer.push(x * i);
  }

  return answer;
}
