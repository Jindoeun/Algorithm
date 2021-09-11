function solution(id_list, report, k) {
  var answer = new Array(id_list.length);
  var mail = new Array(id_list.length);
  
  var reportArr = report.filter(function(el, index) {
    return report.indexOf(el) === index;
  });
  
  answer.fill(0);
  mail.fill(0);

  for (var i = 0; i < reportArr.length; i++) {
    reportArr[i] = reportArr[i].split(" ");
  }

  reportArr.forEach(function(el, index) {
    mail[id_list.indexOf(el[1])]++;
  });

  mail.forEach(function(el1, index1) {
    if(el1 >= k) {
      reportArr.forEach(function(el2, index2) {
        if(id_list[index1] === el2[1]) answer[id_list.indexOf(el2[0])]++;
      });
    }
  });

  return answer;
}