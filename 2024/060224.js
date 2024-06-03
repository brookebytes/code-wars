// Reverse and Invert - 7kyu
/* Reverse and invert all integer values in a given list. Remove all types other than integer. */

function reverseInvert(array){
  return array
    .filter(e => Number.isInteger(e))
    .map(int => int >= 0 ? -Number((String(int).split("").reverse().join("")))
         : Number(String(Math.abs(int)).split("").reverse().join("")));
}
