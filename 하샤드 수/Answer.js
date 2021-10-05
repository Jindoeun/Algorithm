function solution(x) {
  return x % ((x+"").split("").reduce((acc, cur) => acc += (cur*1), 0)) == 0 ? true : false;
}


// old
function old(x) {
  var sum = 0;

  for(var i = 0; i < (x+"").length; i++){
    sum += ((x+"")[i])*1;
  }
  return (x % sum == 0) ? true : false;
}


// other people
function other1(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a )); // !0 = true, !n(0을 제외한) = false
}

function other2(x) { // 숫자가 속도 더 빠름
  let num = x;
  let sum = 0;
  do {
    sum += x%10;
    x = Math.floor(x/10);
  } while (x>0);

  return !(num%sum);
}

function other3(x,i=0,sum=0) { // 느리지만 재귀함수 사용한 예
  return String(x).length==i?x%sum==0:solution(x,i+1,sum + String(x)[i]*1);
}
