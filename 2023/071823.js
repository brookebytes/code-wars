//Duplicate Enconder - 6kyu
// Convert duplicate characters in the string to "(" and unique elements to ")"

function duplicateEncode(word){
  let count = {};
  let chars = word.toLowerCase().split("");
  chars.forEach(char => count[char] ? count[char]+=1 : count[char]=1);
  return chars.map(char => count[char]>1 ? ")" : "(").join("");
}
