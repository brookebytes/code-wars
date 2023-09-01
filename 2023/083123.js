//Thinking & Testing: Something capitalized
// Look at the results of the testcases and write a function to meet the results.

function testit(s){
  return s
    .split(" ")
    .map((e) => e.substring(0,e.length-1) + e.slice(-1).toUpperCase())
    .join(" ");
}
