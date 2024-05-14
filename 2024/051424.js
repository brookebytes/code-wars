//Even times last - 7kyu
/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
 * Indices in sequence start from 0.
 * If the sequence is empty, you should return 0.
*/

function evenLast(numbers) {
  return numbers.reduce((acc, cur, i) => i % 2 == 0 ? acc + (cur * numbers[numbers.length-1]) : acc, 0);
}
