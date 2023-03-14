//Sum of integers in string - 7kyu
// Your task in this kata is to implement a function that calculates the sum of integers inside a string. 
// Only postive integers will be tested.

function sumOfIntegersInString(s){
  return /\d/.test(s) ? s.split(/\D+/g).map(str => Number(str)).reduce((acc,num) => acc+num) : 0;
}
