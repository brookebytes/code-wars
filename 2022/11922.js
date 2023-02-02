//Filter out the geese - 8kyu
// return an array containing all of the strings in the input array except those that match strings in geese

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
};

//Get the mean of an array - 8kyu
// calculate the downward rounded average of the marks array

const getAverage = marks => Math.floor(marks.reduce((acc, curVal) => curVal + acc, 0)/marks.length);

//Count the Monkeys! - 8kyu
// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  let arr = []
  for (i=1; i<=n; i++) {
    arr.push(i);
  }
  return arr;
}


//Third Angle of a Triangle - 8kyu
// You are given two interior angles (in degrees) of a triangle. Write a function to reutrn the 3rd. Note: only positive integers will be tested.

const otherAngle = (a,b) => 180-a-b;


//Function 2 - squaring an argument - 8kyu
// write a function that takes an argument and returns the square of it

const square = x => x*x;

//Convert a String to a Number! - 8kyu
// Transform a string into a number. All inputs will be strings and a valid representation of an integral number

const stringToNumber = str => Number(str);
