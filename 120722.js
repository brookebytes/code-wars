//Add Length - 8kyu
//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.

function addLength(str) {
  return str.split(" ").map(word => word+` ${word.length}`);
}



//Ensure question - 8kyu
/*Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.*/

function ensureQuestion(s) {
  return s.charAt(s.length-1)==='?' ? s : s+'?';
}
