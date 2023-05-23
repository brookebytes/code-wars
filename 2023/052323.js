//Exes and Ohs - 7kyu
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let xCount = oCount = 0;
  str.toLowerCase().split("").forEach((char) => char=='x' ? xCount++ : char=='o' ? oCount++ : 0);
  return xCount == oCount;
}
