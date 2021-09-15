function printAgeGroup(age) {
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