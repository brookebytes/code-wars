//Sum of array singles - 7kyu
// return the sum of the numbers that occur only once

function repeats(arr){
  return arr
    .filter((num, index) => index==arr.lastIndexOf(num) && index==arr.indexOf(num))
    .reduce((acc, cur) => acc+cur, 0);
};
