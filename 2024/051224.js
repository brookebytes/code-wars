//Least Larger - 7kyu
/* Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ). */

function leastLarger(a,i) {
  return a.indexOf(Math.min(...a.filter(n => n > a[i])));
}
