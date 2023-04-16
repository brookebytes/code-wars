//Find the odd int - 6kyu
/*Given an array of integers, find the one that appears an odd number of times.
 * There will always be one integer that appears an odd number of times.*/

function findOdd(A) {
  let occurences = {};
  A.forEach(num => occurences[num] ? occurences[num]++ : occurences[num]=1)
  return Number(Object.keys(occurences).filter(num => occurences[num]%2!=0))
}
