//Double Char - 8kyu
//Given a string, you have to return a string in which each character 
//(case-sensitive) is repeated once.
function doubleChar(str) {
  let result = "";
  str.split("").forEach(char => result+=char.repeat(2));
  return result;
}

