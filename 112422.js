//pick a set of first elements - 8kyu
/*Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []*/

function first(arr, n) {
  if (n <= 0) {
    return [];
  }
  else {
    return n > 0 && arr.length > 0 ? arr.slice(0,n) : arr.slice(0,1);
    }
}
