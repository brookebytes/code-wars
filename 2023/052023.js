//Alphabetized - 6kyu
// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

function alphabetized(s) {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return s.split("").filter(char => alphabet.includes(char.toUpperCase())).sort((a,b) => alphabet.indexOf(a.toUpperCase())-alphabet.indexOf(b.toUpperCase())).join("");
}
