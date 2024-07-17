// Single digit - 7kyu
/* The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process. */

function singleDigit(n) {
  while (n > 9) {
    n = [...n.toString(2)].reduce((acc, cur) => acc+Number(cur), 0);
  }
  return n;
}
