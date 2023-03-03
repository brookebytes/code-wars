//Jenny the youngest detective - 7kyu
// Each of the numbers in the array refers to the position of a letter in the string, spaces do not count. Use the numbers to retrieve the letters from the string to decipher the word. If no letter is found, return "No mission today" 

function missingWord(nums, str) {
  let msg = '';
  let letters = str.replace(/\s/g, '').split("");
  nums = nums.sort((a,b) => a-b)
  nums[nums.length-1]>letters.length ? msg="No mission today" : nums.forEach(num => msg+=letters[num].toLowerCase())
  return msg;
}



