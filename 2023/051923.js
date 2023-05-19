//Replace With Alphabet Position - 6kyu
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
  const alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return text.split("").map(char => alphabet.includes(char.toLowerCase()) ? alphabet.indexOf(char.toLowerCase())+' ' : '').join("").trim();
}
