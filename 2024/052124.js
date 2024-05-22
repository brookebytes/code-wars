// Only Duplicates - 6kyu
/* Given a string, remove any characters that are unique from the string. */

function onlyDuplicates(str) {
  return str
    .split("")
    .filter((char, i) => str.indexOf(char) !== str.lastIndexOf(char))
    .join("");
}
