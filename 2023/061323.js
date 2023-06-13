//Bin to Decimal - 8kyu
// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin,2)
}



//Basic JS - Building a calculator
// The test expects you to provide a Calculator object with the following methods: add, subtract, multiply and divide.

var Calculator = {
  'add': (x,y) => x+y,
  'subtract': (x,y) => x-y,
  'multiply': (x,y) => x*y,
  'divide': (x,y) => y===0 ? false : x/y,
};
