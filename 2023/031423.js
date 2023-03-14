//Product of Maximums Of Array (Array Series #2)
/* Given an array/list[] of integers, Find the product of the k maximal numbers.
 * Notes: Array/list size is at least 3
 * Array/list's numbers will be a mixture of postivies, negatives and zeros
 * Repetition of numbers in the array/list could occur. */

function maxProduct(numbers, size){
  return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,cur) => acc*=cur);
}

