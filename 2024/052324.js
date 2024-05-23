//Arithmetic sequence - sum of n elements - 7kyu
/* This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element's position within the sequence. */

function ArithmeticSequenceSum(a, r, n) {
  let sum = a;
  for (let i = 1; i < n; i++) {
    sum += a + r*i;
  }
  return sum;
}
