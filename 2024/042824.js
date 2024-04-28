//Return a string's even characters - 7kyu
/* Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string". */

//P: a string of characters
//R: an array of the chars in the string whose index is even (indexing starts at 1 here, not 0)
    //OR 'invalid string' if the length of the string is less than 2 or more than 100
//E: "abcdefg" => ['b','d','f'], "a" => 'invalid string'
//P: create a function that takes in a string
    // if the string length is less than 2 or greater than 100, return 'invalid string'
    // turn the string into an array of chars and run a filter function
    // if the index of the char is even, return it, otherwise skip it
    // return the filtered array


function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  return string.split("").filter((char, i) => (i+1)%2 == 0);
}
