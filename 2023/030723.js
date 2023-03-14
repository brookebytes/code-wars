//Band name generator - 7kyu
// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function bandNameGenerator(str) {
  return str.charAt(0) === str.charAt(str.length-1)
    ? str.charAt(0).toUpperCase()+str.slice(1)+str.slice(1)
    : `The ${str.charAt(0).toUpperCase()+str.slice(1)}`
}
