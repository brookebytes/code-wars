// Ones' Complement - 7kyu
// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

function onesComplement(n) {
  return n.toString(2).split("").map(e => e==1 ? 0 : 1).join("");
};
