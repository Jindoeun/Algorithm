function solution(arr1, arr2) {
  var answer = [];

  for(var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for(var j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}


// old
function old(arr1, arr2) {
  var answer = [];
  
  for(var i = 0; i < arr1.length; i++){
    var arr = [];
    for(var j = 0; j < arr1[i].length; j++){
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  
  return answer;
}


// other people
function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
