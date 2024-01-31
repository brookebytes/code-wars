//Love vs friendship - 7kyu

function wordsToMarks(string){
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return string
    .split("")
    .reduce((acc, cur) => acc+alphabet.indexOf(cur), 0);
}
