//Inspiring Strings - 7kyu

function longestWord(stringOfWords) {
  let words = stringOfWords.split(" ");
  return words.sort((a,b) => a.length-b.length)[words.length-1];
}
