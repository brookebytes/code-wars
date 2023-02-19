//Binary Addition - 7kyu
/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string. */

function addBinary(a,b) {
  let sum = a+b;
  let binary = [];
  while (!sum<=0){
    binary.unshift(sum%2);
    sum = Math.floor(sum/2);
  }
  return binary.join('');
}
