//Split Strings - 6kyu
//Split the strings into pairs of two characers. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore.

function solution(str){
  let result = [];
  for (i=0; i<str.length; i+=2) {
    result.push(str[i+1] ? str[i]+str[i+1] : str[i]+"_");
  }
  return result;
}
