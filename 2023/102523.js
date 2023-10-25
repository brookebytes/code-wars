//Dominant array elements - 7kyu
/* An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. */

function solve(arr) {
  return arr.filter((num, index) => num > Math.max(...arr.slice(index+1)));
}
