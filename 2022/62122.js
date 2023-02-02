//SevenAte9 - 7kyu
//Write a function that removes every lone 9 that is between 7s.
function sevenAte9(str) {
  let result = "";
  let nums = str.split("");
  nums.forEach((num, i) => {
    if (!(num==9 && nums[i-1]==7 && nums[i+1]==7)){
      result+=num;
    }
  });
  return result;
}
