//Simple Fun #352: Reagent Formula - 8kyu
/* You are given an integer array formula. Array contains only digits 1-8 that represent material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise. */

function isValid(formula){
  if (!formula.includes(7) && !formula.includes(8)) {
    return false;
  } else if ((formula.includes(5) && !formula.includes(6)) || (!formula.includes(5) && formula.includes(6))) {
    return false;
  } else if ((formula.includes(1) && formula.includes(2)) || (formula.includes(3) && formula.includes(4))) {
    return false;
  } else return true;
}
