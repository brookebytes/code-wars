//The old switcheroo 2 - 7kyu
// Replace all the letters in the string with their respective positions in the English alphabet

function encode(str) {
  console.log(str)
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  return str
    .split(" ")
    .map(word => word
         .split("")
         .map(char => alphabet.includes(char.toLowerCase()) ? alphabet.indexOf(char.toLowerCase()) : char)
         .join(""))
    .join(" ");
}
