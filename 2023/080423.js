//What dominates your array? - 7kyu
// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr. Return the dominator.

function dominator(arr) {
  let count = {};
  arr.forEach(el => count[el] ? count[el]+=1 : count[el]=1);
  let maxCount = Math.max(...Object.values(count));
  return maxCount > arr.length/2 ? Number(Object.keys(count).find(el => count[el]==maxCount)) : -1;
}

