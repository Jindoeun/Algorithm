function solution1(n) {
  var sqrt = Math.sqrt(n);
  return sqrt % 1 ? -1 : Math.pow((sqrt + 1), 2);
}

function solution2(n) { // 2제곱이라 단순히 곱하는 것이 조금 더 빠르다.
  var sqrt = Math.sqrt(n);
  return sqrt % 1 ? -1 : (sqrt + 1) * (sqrt + 1);
}


// old
function old(n) {
  var x = Math.sqrt(n);
  if(Number.isInteger(x)){ // IE에서 작동 X
    return Math.pow(x+1, 2);
  } else{
    return -1;
  }
}