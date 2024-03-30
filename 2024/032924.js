//Alphabetical Addition - 7kyu

function addLetters(...letters) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  let sum = letters.reduce((acc, cur) => acc+alphabet.indexOf(cur), 0) % 26;
  return sum > 0 ? alphabet.charAt(sum) : "z";
}
