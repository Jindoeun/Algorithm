function solution(s) {
  var length = s.length;
  return (length % 2 == 0) ? s.substr(length/2-1, 2) : s.substr(length/2, 1);
}


// old
function old(s) {
  if(s.length % 2){ //홀수
    return s.substr(s.length/2, 1);
  } else{ //짝수
    return s.substr(s.length/2-1, 2);
  }
}


// other people
function other1(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

function other2(s) {
  const mid = Math.floor(s.length/2);
  return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}