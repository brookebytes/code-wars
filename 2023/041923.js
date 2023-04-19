//Count characters in your string - 6kyu
/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. */ 

function count(string) {
  let occurences = {};
  string.split("").forEach(char => occurences[char] ? occurences[char]+=1 : occurences[char]=1);
  return occurences;
}
