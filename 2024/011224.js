//Move 10 - 7kyu

function moveTen(s){
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return s.split("").map(char => alphabet.charAt(alphabet.indexOf(char)+10) || alphabet.charAt((alphabet.indexOf(char)+10)-26)).join("");
}
