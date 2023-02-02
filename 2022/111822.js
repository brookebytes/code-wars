//Find the position! - 8kyu
// When provided with a letter, return its position in the alphabet

function position(letter){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphabet.indexOf(letter)+1}`;
}


//Array plus array - 8kyu
//Get the sum of the two arrays

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, curVal) => acc+curVal) + arr2.reduce((acc, curVal) => acc+curVal);
}
