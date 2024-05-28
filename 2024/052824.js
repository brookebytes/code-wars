// Organise duplicate numbers list - 6kyu

/* Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain/
 * Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned. */

function group(arr) {
  const nums = {};
  arr.map(num => nums[num] ? nums[num].push(num) : nums[num] = [num]);
  return Object.values(nums).sort((a, b) => arr.indexOf(a[0]) - arr.indexOf(b[0]));
}
