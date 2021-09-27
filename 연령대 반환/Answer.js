function printAgeGroup(age) {
  return answer < 10 ? "10대 미만" : age >= 90 ? "90대 이상" : (age+"")[0] + "0대";
}


// other people
function other(age) {
  if(typeof age !== "number" || age < 0 || age > 120 || !Number.isInteger(age)){
    return "Error";
  }

  let num = Math.floor(age/10)*10;
  let answer;

  if (num < 10){
    answer = '10대 미만';
  } else if(num >= 90){
    answer = '90대 이상';
  } else{
    answer = num + '대';
  }

  return answer;
}