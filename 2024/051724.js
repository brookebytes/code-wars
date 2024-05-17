//Simple Fun #50: Array Conversion - 7kyu
/* Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:
 * On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
 * On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
 * After the algorithm has finished, there will be a single element left in the array. Return that element. */

function arrayConversion(arr) {
  let i = 0;
  while (arr.length > 1) {
    if (i % 2 == 0) {
      let sumPairs = [];
      for (let j = 0; j < arr.length; j+=2) {
        sumPairs.push(arr[j] + arr[j+1]);
      }
      arr = sumPairs;
      }
    else {
      let productPairs = [];
      for (let j = 0; j < arr.length; j+=2) {
        productPairs.push(arr[j]*arr[j+1]);
      }
      arr = productPairs;
    }
    i++;
  }
  return arr[0];
}
