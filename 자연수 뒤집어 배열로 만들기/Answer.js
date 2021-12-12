function solution(n){
	return (n+"").split("").reverse().map(el => el*1);
}


// old
function old(n) {
	n = String(n).split("").reverse();
	for(var i = 0; i < n.length; i++){
		n[i] = n[i] * 1;
	}
	return n;
}


// other people
function other(n) {
  var arr = [];

  do {
    arr.push(n%10);
    n = Math.floor(n/10);
  } while (n>0);

  return arr;
}