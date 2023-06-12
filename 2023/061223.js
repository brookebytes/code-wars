//Simple Fun #30 - Strings Construction -7kyu
// How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.


function stringsConstruction(A, B) {
  let countA = {};
  let countB = {};
  let charsA = A.split("");
  let result = 0;
  let bool = true;

  charsA.forEach(str => countA[str] ? countA[str]++ : countA[str]=1);
  B.split("").forEach(str => countB[str] ? countB[str]++ : countB[str]=1);

  while (bool) {
    if (charsA.every(str => countB[str]>=countA[str])) {
      charsA.forEach(str => countB[str]--);
      result++;
    } else {
      bool = false;
    }
  }
  return result;
}
