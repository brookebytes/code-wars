//Only one - 7kyu
/* Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false. */

function onlyOne() {
  return [...arguments].filter(flag => flag==true).length == 1;
}
