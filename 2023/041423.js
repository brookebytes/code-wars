//All Star Code Challenge #15 - 6kyu
//Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

function rotate(str){
  let arr = [];
  let rotated = str;
  for (i=0; i<str.length; i++) {
    rotated = rotated.slice(1)+rotated.slice(0,1);
    arr.push(rotated);
  }
  return arr;
}
