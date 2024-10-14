// Substituting Variables Into Strings: Padded Numbers - 7kyu
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

function solution(value){
  return `Value is ${String(value).padStart(5, 0)}`;
}
