//String ends with? - 7kyu
/*returns true if the first argument(string) passed in ends with the 
* 2nd argument (also a string).*/
function solution(str, ending){
  return str.substr(-ending.length,ending.length) == ending ? true : false;
}
