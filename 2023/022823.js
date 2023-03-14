//Arithmetic progression - 7kyu
// Write a function that will return the first n elements of the sequence with the given common difference d and first element a. The result should be a string of numbers, separated bya comma and space.

function arithmeticSequenceElements(a, d, n) {
  let result = a.toString();
  let current = a;
	for (i=1; i<n; i++){
    current += d;
    result += `, ${current.toString()}`;
  }
  return result;
}
