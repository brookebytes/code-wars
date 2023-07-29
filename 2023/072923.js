//Simple Fun #176: Reverse Letter - 8kyu
// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split("").filter(char => alphabet.includes(char)).reverse().join("");
}
