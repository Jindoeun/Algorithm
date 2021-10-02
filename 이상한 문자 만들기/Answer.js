function solution(s) {
    var str = s.split("");
    var even = true;

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            if(even) {
                str[i] = str[i].toUpperCase();
                even = false;
            } else {
                str[i] = str[i].toLowerCase();
                even = true;
            }
        } else {
            even = true;
        }
    }

    return str.join("");
}

function solution2(s) {
    var even = true;
    var answer = "";

    for(var i = 0; i < s.length; i++) {
        if(s.charAt(i) !== " "){
            if(even) {
                answer += s[i].toUpperCase();
                even = false;
            } else {
                answer += s[i].toLowerCase();
                even = true;
            }
        } else {
            answer += " ";
            even = true;
        }
    }

    return answer;
}


// old
function old(s) {
    var answer = s.split("");

    answer[0] = answer[0].toUpperCase();
    for(var i = 1; i < s.length; i++){
        if(answer[i-1] == " "){
            answer[i] = answer[i].toUpperCase();
        } else if(answer[i-1] == answer[i-1].toUpperCase()){
            answer[i] = answer[i].toLowerCase();
        } else{
            answer[i] = answer[i].toUpperCase();
        }
    }

    return answer.join("");
}