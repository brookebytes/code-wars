//How many "word"? - 7kyu

function testit(s){
  const word = "word";
  let filtered = s.toLowerCase().split("").filter(char => word.includes(char)).join("");
  let wordIndex = 0;
  let buildWord = "";
  let count = 0;
  for (i=0; i<filtered.length; i++) {
    if (filtered[i]==word[wordIndex]) {
      buildWord += filtered[i];
      wordIndex < 3 ? wordIndex++ : wordIndex=0;
      if (buildWord.length && buildWord.length%4==0) {
        count++;
      }
    }
  }
  return count;
}
