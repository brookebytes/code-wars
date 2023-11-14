//Concatenated Sum - 7kyu

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/

function checkConcatenatedSum(number, n) {
  let digits = String(number)
  .split("")
  .map(num => {
    return "0123456789".includes(num) ? Number(num.repeat(n)) : 0;
  });
  return digits.reduce((acc, cur) => acc+=cur) == Math.abs(number);
}
