// Split In Parts - 7kyu
// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

var splitInParts = function(s, partLength){
  let str = "";
  for (i=0; i<=s.length; i+=partLength) {
    str += s.slice(i, i+partLength) + " ";
  }
  return str.trim();
};
