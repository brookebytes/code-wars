//Double Trouble - 7kyu
/* Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number. Work through the array from left to right. */

function trouble(x, t){
  for (i=0; i<x.length; i++) {
    if (x[i] + x[i+1] == t) {
      x.splice(i+1,1);
      i--;
    }
  }
  return x;
}
