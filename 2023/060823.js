//Eliminate the intruders! Bit manipulation - 7kyu
/* You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's). */

function eliminateUnsetBits(number) {
  return parseInt(number.split("0").join(""),2) || 0;
}
