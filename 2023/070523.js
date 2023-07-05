//How many are smaller than me? - 7kyu
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

function smaller(nums) {
  let result = [];
  for (i=0; i<nums.length; i++) {
    let count = 0;
    for (j=i+1; j<nums.length; j++) {
      if (nums[j]<nums[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
