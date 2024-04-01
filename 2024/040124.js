//Character Counter - 7kyu

function validateWord(s) {
  let count = {};
  s.toLowerCase().split("").map(char => count[char] ? count[char]+=1 : count[char]=1);
  return [...new Set(Object.values(count))].length == 1;
}
