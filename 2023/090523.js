//Reversed Message - 7kyu
/* Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur. */

function reverseMessage(str) {
  return !str.length ? str : str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map( word  => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
