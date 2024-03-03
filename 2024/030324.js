//Guess the Word: Count Matching Letters - 7kyu

function countCorrectCharacters(correctWord, guess){
  if (correctWord.length != guess.length){
    throw new Error("Mismatching lengths");
  }
  return guess.split("").reduce((acc, cur, index) => cur==correctWord[index] ? acc+=1 : acc, 0);
}
