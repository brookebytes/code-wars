//Previous multiple of three - 7kyu
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three, and if no such number exists, return null

const prevMultOfThree = n => {
  let digits = n.toString().split("");
  for (i=digits.length; i>=1; i--){
    if (Number(digits.join(""))%3==0) {
      return Number(digits.join(""))
    }
    digits.pop();
  }
  return null;
}
