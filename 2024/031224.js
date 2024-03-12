//From A to Z - 7kyu

function gimmeTheLetters(sp) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.slice(letters.indexOf(sp[0]), letters.indexOf(sp[2])+1);
}
