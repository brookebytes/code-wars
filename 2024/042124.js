//String Scramble - 7kyu

function scramble(str, arr) {
  let scrambledArr = [];
  for (i = 0; i < arr.length; i++) {
    scrambledArr[arr[i]] = str[i];
  }
  return scrambledArr.join("");
};
