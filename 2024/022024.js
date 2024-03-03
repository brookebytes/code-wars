//Squeaky Window - 7kyu

function sliding(nums, k) {
  let maximums = [];
  for (i=0; i<nums.length; i++) {
    let inView = nums.slice(i, i+k);
    if (inView.length==k) {
       maximums.push(Math.max(...inView));
     } else {
       return maximums;
     }
   }
    return maximums;
}
