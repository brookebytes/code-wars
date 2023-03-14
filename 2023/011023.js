//Count consonants - 7kyu
//Write a function that takes a string of English-language text and returns the number of consonants in the string.

function consonantCount(str) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  return str.toLowerCase().split("").filter(char => consonants.includes(char)).length;
}
