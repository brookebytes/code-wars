//Summing a number's digits - 7kyu
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return number.toString().split("").map(digit => parseInt(digit) ? parseInt(digit) : null).reduce((acc,num) => acc + num, 0);
}
