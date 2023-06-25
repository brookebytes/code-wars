//Isograms - 7kyu
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  let unique = new Set(str.toLowerCase());
  return [...unique].join("") === str.toLowerCase();

  //return [...str.toLowerCase()].reduce((acc, char) => acc.includes(char) ? acc : acc+char,'' ) === str.toLowerCase();

}
