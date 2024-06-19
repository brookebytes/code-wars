// Difference of Squares - 7kyu
/* Find the difference between the sum of the squares of the firtst n natural numbers (1 <= n <= 100) and the square of their sum. */

function differenceOfSquares(n) {
  let sum = 0;
  let squaresSum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
    squaresSum += (i*i);
  }
  return (sum*sum) - squaresSum;
}
