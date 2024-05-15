//Sum Factorial - 7kyu
/*You will be given a list of values that you must first find the factorial, and then return their sum.*/


function sumFactorial(arr) {
  function getFactorial(num) {
    if (num == 1) {
      return 1
    }
    return num * getFactorial(num - 1);
  }
  return arr.reduce((acc, cur) => acc + getFactorial(cur), 0);
}
