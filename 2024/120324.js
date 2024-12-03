// Char Code Calculation - 7kyu
/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1 
 * Then replace any incidence of the number 7 with the number 1 and call this number total2.
 * Then return the difference between the sum of the digits in total1 and total2. */

function calc(x) {
  let num1 = 0;
  let num2 = 0;
  for (i = 0; i < x.length; i++) {
    let ascii = String(x.charCodeAt(i));
    for (j = 0; j < ascii.length; j++) {
      let digit = Number(ascii[j]);
      num1 += digit;
      num2 += digit == 7 ? 1 : digit;
    }
  }
  return num1 - num2;
}
