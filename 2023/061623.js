//Consonant value - 6kyu
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

function solve(s) {
  const consonants = '  bcd fgh jklmn pqrst vwxyz';
  let totals = s.split(/[aeiou]/ig).map(str => str.split("").reduce((acc, char) => acc+consonants.indexOf(char),0));
  return Math.max(...totals);
};
