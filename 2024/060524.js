// Thinking & Testing: Uniq or not Uniq - 7kyu
/* No Story, No description, Only by Thinking & Testing, Look at the result of testcase, guess the code! */

function testit(a,b){
  return [...new Set(a)].concat([...new Set(b)]).sort((a, b) => a-b);
}
