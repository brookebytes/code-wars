// Loose Change!- 7kyu
// Complete the function to return a dollar amount of how much change you have!
// These amounts are already preloaded as floats into the CHANGE object for you to use!
// You should return the total in the format $x.xx.

// Remember you have a CHANGE dictionary to work with ;)

function changeCount( change ){
  return "$" + change.split(" ").reduce((acc, cur) => acc + CHANGE[cur], 0).toFixed(2);
}
