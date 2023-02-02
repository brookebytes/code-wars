//Reversing Words in a String - 8kyu
/* You need to write a function that reverses the words in a given string. 
 * A word can also fit an empty string. Ignore unneccessary whitespace.*/

function reverse(string){
  return string.split(" ").reverse().join(" ");
}


