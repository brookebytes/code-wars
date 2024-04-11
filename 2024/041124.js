//Find the unique number - 6kyu

function findUniq(arr) {
  let nums = [ ...new Set(arr)];
  return arr.indexOf(nums[0])==arr.lastIndexOf(nums[0]) ? nums[0] : nums[1];
}

