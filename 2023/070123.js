//Largest pair sum in array - 7kyu
// Given a sequence of numbers, find the largest pair sum in the sequence.
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  return numbers.sort((a,b) => b-a).slice(0,2).reduce((acc,n) => acc+n);
}
