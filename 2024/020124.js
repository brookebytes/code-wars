//Cryptanalysis Word Patterns - 7kyu

function wordPattern(word) {
  word = word.toLowerCase();
  let seen = word[0];
  let result = "0";
  for (i=1; i<word.length; i++) {
    if (seen.includes(word[i])) {
      result += "."+seen.indexOf(word[i]);
    } else {
      seen += word[i];
      result += "."+seen.indexOf(word[i]);
    }
  }
  return result;
}
