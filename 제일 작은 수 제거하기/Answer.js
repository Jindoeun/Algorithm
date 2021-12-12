function solution(arr) {
  if(arr.length < 2) return [-1];
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1)
  return arr;
}


// old
function old(arr) {
  if(arr.length > 1){
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  } else{
    return [-1];
  }
  return arr;
}


// other people
function solution(arr) {
  if(arr.length < 2) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  return arr;
}