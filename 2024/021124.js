//Longest alphabetical substring - 6kyu

function longest(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let max = str[0];
  for (i=0; i<str.length-1; i++) {
    let curr = str[i];
      while (alphabet.indexOf(str[i]) <= alphabet.indexOf(str[i+1])) {
        curr += str[i+1];
        i++;
    }
    if (curr.length > max.length) {
      max = curr;
    }
  }
  return max;
}
