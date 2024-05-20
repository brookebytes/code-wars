//Sum of squares less than some number - 7kyu
/* Write a function that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.*/

function getNumberOfSquares(n) {
  let count = 0;
  let sum = 1;
  let i = 1;
  while (sum < n) {
    count++;
    i++;
    sum += i*i;
  }
  return count;
}
