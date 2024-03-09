//Odd Ones Out! - 7kyu

function oddOnesOut(nums) {
  let count = {};
  nums.map(num => count[num] ? count[num]+=1 : count[num]=1);
  return nums.filter(num => count[num]%2==0);
}
