//Return String of First Characters
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.


function makeString(s){
  return s.split(" ").map(word => word[0]).join("");
}
