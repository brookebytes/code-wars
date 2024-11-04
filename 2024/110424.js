// Sum of Array Averages - 7kyu
/* Program a function sumAverage(arr) where arr is an array containing arrays full of numbers.

First, determine the average of each array. Then, return the sum of all the averages.  */

const sumAverage = (arr) => {
  return Math.floor(arr.reduce((acc, ary) => acc + (ary.reduce((acc, cur) => acc+cur, 0)/ary.length),0));
}
