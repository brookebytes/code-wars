//Minimize Sum Of Array (Array Series #1)
/*Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
 * Note: Array/list will contain positives only and Array/list will always have even size*/

function minSum(arr) {
  let sum = 0;
  arr.sort((a,b) => a-b);
  for (i=0; i<arr.length/2; i++) {
    sum += arr[i]*arr[arr.length-1-i];
  }
  return sum;
}
