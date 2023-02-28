//Indexed capitalization - 7kyu
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
// The input will be a lowercase string with no spaces and an array of digits.

function capitalize(s,arr){
  for (num of arr) {
    s = s.slice(0,num) + s.charAt(num).toUpperCase() + s.slice(num+1)
  }
  return s;
};
