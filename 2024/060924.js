//Thinking & Testing: Sport Star - 7kyu
/* No Story
* No Description
* Only by Thinking and Testing
* Look at result of testcase, guess the code!
*/

function testit(act,s) {
  return act
    .map((e, i) => (e == "run" && s[i] == "|") ? "/" : (e == "jump" && s[i] == "_") ? "x" : s[i])
    .join("");
}
