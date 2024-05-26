// Strong Number (Special Numbers Series #2) - 7kyu
/* Strong number is a number with the sum of the factorial of its digits is equal to the number itself. 
 * Given a positive number, find if it is strong or not, and return either "STRONG!!!" or "Not Strong !!"*/


function strong(n) {
  let digits = String(n).split("");
  let factorialSum = 0;
  for (i = 0; i < digits.length; i++) {
    let sum = 1;
    for (j = 1; j <= digits[i]; j++) {
      sum *= j;
    }
    factorialSum += sum;
  }
  return factorialSum == n ? "STRONG!!!!" : "Not Strong !!" ;
}
