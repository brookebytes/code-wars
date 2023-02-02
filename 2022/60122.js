//Find the capitals
/*Write a function that takes a single string (word) as argument. The function
 * must return an ordered list containing the indexes of all capital letters in
 * the string.*/
var capitals = function (word) {
  let indexes = [];
  word.split("").forEach((letter, index) => {if (letter.toUpperCase() == letter){
    indexes.push(index);
  }});
  return indexes;
};
