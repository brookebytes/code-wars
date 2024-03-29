//Highest Scoring Word - 6kyu
/* Given a string of words, you need to find the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 * You need to return the highest scoring word as a string.
 * If two words score the same, return the word that appears earliest in the original string.
 * All letters will be lowercase and all inputs will be valid. */

function high(x){
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let words = x.split(" ");
  let scores = words.map(word => word.split("").reduce((acc, letter) => acc+(alphabet.indexOf(letter)),0));
  return words[scores.indexOf(Math.max(...scores))];
}
