function solution(phone_number) {
  return "*".repeat(phone_number.length-4)+phone_number.slice(-4);
}


// old
function old1(phone_number) {
  var answer = '';

  for(var i = phone_number.length-1; i >= 0; i--){
    if(i > phone_number.length-5){
        answer = phone_number[i] + answer;
    } else{
        answer = "*" + answer;
    }
  }
  return answer;
}

function old2(phone_number) {
  var answer = "*".repeat(phone_number.length-4) + phone_number.substring(phone_number.length-4, phone_number.length);
  return answer;
}


// other people
function other1(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function other2(s){
  var result = ""
  for(var i=0;i< s.length;i++){    
    result += i < s.length -4 ? "*" : s.charAt(i);
  }  
  return result;
}
