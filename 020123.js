//Debug Sum of Digits of a Number - 7kyu
//Debug the code

function getSumOfDigits(integer) {
  var sum = 0;
  var digits =  Math.floor(integer).toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += Number(digits[ix]);
  }
  return sum;
}
