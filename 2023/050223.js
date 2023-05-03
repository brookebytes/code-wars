//Find the index of the second occurrence of a letter in a string - 7kyu
/* Write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the stirng, then the function should return -1. If the letter occurrs only once in the string, then -1 should also be returned. */

function secondSymbol(s, symbol) {
  return s.includes(symbol) ? s.indexOf(symbol, s.indexOf(symbol)+1) : -1;
}
