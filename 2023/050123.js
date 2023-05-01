//Counting Duplicates - 6kyu
/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

function duplicateCount(text){
  const count = {};
  text.split("").forEach(char => count[char.toLowerCase()] ? count[char.toLowerCase()]+=1 : count[char.toLowerCase()]=1);
  return Object.values(count).filter(n => n>=2).length;
}
