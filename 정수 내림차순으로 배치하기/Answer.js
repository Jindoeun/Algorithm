function solution1(n){
  return ((n+"").split("").sort().reverse().join(""))*1;
}

function solution2(n){
  return ((n+"").split("").sort((a, b) => b - a).join(""))*1;
}


// old
function old(n){
  n = n + "";
  n = n.split("").sort(function(a, b){
    return b - a;
  }).join("");
  n = n * 1;
  return n;
}


// other people
function other(n) { // 숫자로 하면 쪼오끔 더 빠름
  var nums =[];
  do{
    nums.push(n%10);
    n=Math.floor(n/10);
  } while(n>0)

  return nums.sort((a,b)=>b-a).join('')*1;
}