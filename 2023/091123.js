//All Star Coding Challenge #3 - 7kyu
// Create a function that takes a string argument and returns that same string with all vowels removed

var removeVowels = function(str){
  return str.split("").filter(char => !"aeiou".includes(char)).join("");
}
