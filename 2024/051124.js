//Larger Product or Sum - 7kyu
/* For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two. */

function sumOrProduct(array, n) {
  let sorted = array.sort((a, b) => a-b);
  let minProduct = sorted.slice(0, n).reduce((acc, cur) => acc * cur);
  let maxSum = sorted.slice(sorted.length-n).reduce((acc, cur) => acc + cur);
  return minProduct == maxSum ? "same" : minProduct > maxSum ? "product" : "sum";
}
