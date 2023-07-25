//Alphabet symmetry - 7kyu
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 

function solve(arr){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(word => word.toLowerCase().split("").filter((letter, index) => alphabet.indexOf(letter)==index).length);
};
