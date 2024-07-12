// COFFEE! - 7kyu
/* Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps. */

function coffee(str) {
  return str.replace(/coffee/gi, "COFFEE");
}
