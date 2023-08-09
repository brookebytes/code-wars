//The mean of two means - 7kyu
/* Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array. */

function getMean(arr, x, y) {
  if (!(x>1 && y>1 && x<=arr.length && y<=arr.length)) {
    return -1;
  }
  let xMean = arr.slice(0,x).reduce((acc,num) => acc+num,0) / x;
  let yMean = arr.slice(-y).reduce((acc,num) => acc+num,0) / y;
  return (xMean+yMean)/2;
}
