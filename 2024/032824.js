//More Zeros than Ones - 6kyu

function moreZeros(s){
  let result = [];
  for (i=0; i<s.length; i++) {
    let binary = s[i].charCodeAt(0).toString(2);
    let zeroCount = binary.split("0").length;
    let oneCount = binary.split("1").length;
    if ((zeroCount > oneCount) && !result.includes(s[i])) {
      result.push(s[i])
    }
  }
  return result;
}
