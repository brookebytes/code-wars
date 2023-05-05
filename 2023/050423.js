//Sum a list but ignore any duplicates - 7kyu
//Please write a function that sums a list, but ignores any duplicate items in the list.

function sumNoDuplicates(numList) {
  let count = {};
  numList.forEach(num => count[num] ? count[num]+=1 : count[num]=1);
  return Object.keys(count)
    .filter(num => count[num]===1)
    .map(n => Number(n))
    .reduce((acc, n) => acc+n, 0)
}


