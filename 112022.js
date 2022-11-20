//Unscrambled eggs - 7kyu
// Return the string without the word "egg" in it

const unscrambleEggs = word => word.split("egg").filter(x => x!=="egg").join("");

//Anagram Detection - 7kyu
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise

// write the function isAnagram
var isAnagram = function(test, original) {
  return test.toUpperCase().split("").sort().join("") == original.toUpperCase().split("").sort().join("");

};

