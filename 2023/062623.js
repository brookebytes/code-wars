//Playing with digits - 6kyu
/* Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p: we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
 * If it is the case we will return k, if not return -1.
 * Note: n and p will always be given as strictly positive integers. */

function digPow(n, p){
  let digits = n.toString().split("");
  let sum = 0;
  for (i=0; i<digits.length; i++) {
    sum+=digits[i]**p;
    p++;
  }
  return sum%n===0 ? sum/n : -1;
}
