//Factorial - 7kyu
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type RangeError

function factorial(n){
  if (n<0 || n>12) {
    throw RangeError;
  }
  let sum = n>0 ? n : 1;
  for (i=1; i<n; i++){
    sum *= i;
  }
  return sum;
}
