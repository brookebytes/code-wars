//Simple Fun #215: Properly Closed Bracket Word - 7kyu
/* We call letter x a counterpart of letter y, if x is the ith letter of the English alphabet, and y is the (27 - i)th for each valid i (1-based). For example, 'z' is the counterpart of 'a' and vice versa, 'y' is the counterpart of 'b', and so on.
 * A properly closed bracket word (PCBW) is such a word that its first letter is the counterpart of its last letter, its second letter is the counterpart of its last by one letter, and so on.
 * Determine if the given word is a PCBW or not.*/

function closedBracketWord(word) {
  if (word.length % 2 !== 0) {
    return false;
  }
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return word
    .split("")
    .slice(0, word.length/2)
    .every((char, i) => word[word.length-(i+1)] == alphabet.charAt(27-alphabet.indexOf(char)));
}
