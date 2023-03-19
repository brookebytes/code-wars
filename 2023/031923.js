//Palindromes Here and There - 7kyu
/* Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.*/

function convertPalindromes(numbers) {
  return numbers.map(number => Number(number.toString().split("").reverse().join(""))===number ? 1 : 0)
};
