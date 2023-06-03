//The Span Function - 7kyu
// Write your own span function that accepts a sequence and a predicate function and returns two sequences - the first contains all the elements up until the element that failed the predicate, the second is the rest of the original sequence

function span(arr, predicate) {
  let i = 0;
  while (predicate(arr[i]) && i<=arr.length) {
    i++;
  }
  return [arr.slice(0,i),arr.slice(i)];
}
