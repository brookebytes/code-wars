// Unflatten a list (Easy) - 7kyu
/* There are several katas like "Flatten a list". These katas are done by so many warriors, that the count of available list to flatten goes down!

So you have to build a method, that creates new arrays, that can be flattened!

In short: You have to unflatten a list/an array.

You get an array of integers and have to unflatten it by these rules:
- You start at the first number.
- If this number x is smaller than 3, take this number x
  directly for the new array and continue with the next
  number.
- If this number x is greater than 2, take the next x
  numbers (inclusive this number) as a sub-array in the
  new array. Continue with the next number AFTER this
  taken numbers.
- If there are too few numbers to take by number, take
  the last available numbers. 
* The given array will always contain numbers. There will only be numbers > 0.*/

function unflatten (flatArray) {
  let newArray = [];
  for (i=0; i<flatArray.length; i++) {
    if (flatArray[i] < 3) {
      newArray.push(flatArray[i]);
    } else {
      newArray.push(flatArray.slice(i,i+flatArray[i]));
      i+=flatArray[i]-1;
    }
  }
  return newArray;
}
