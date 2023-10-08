//Common Substrings - 7kyu
/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long. */

function SubstringTest(str1, str2) {
  str2 = str2.toLowerCase();
  return str1
    .toLowerCase()
    .split("")
    .some((char, index, arr) => str2.includes(char + arr[index+1]));
}
