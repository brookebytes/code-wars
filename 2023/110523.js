//Sorted Union - 7kyu
// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique() {
  return [ ...new Set(Object.values(arguments).flat())];
}
