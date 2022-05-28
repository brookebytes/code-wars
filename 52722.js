//Bingo ( Or Not ) - 7kyu
//Write a function where you will win the game if your numbers can spell "BINGO"
function bingo(a) {
  if (a.includes(2) && a.includes(7) && a.includes(9) && a.includes(14) && a.includes(15)){
    return 'WIN';
  }
  return 'LOSE';
}

//Printer Errors - 7kyu
/* given a string, return the error rate of the printer as a string
 * representing a rational whose numerator is the number of errors and the 
 * denominator the length of the control string. */
function printerError(s) {
  let errors = s.split("").filter(char => /[^a-m]/.test(char));
  return `${errors.length}/${s.length}`;
}
