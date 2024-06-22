//Nothing special - 7kyu
/* Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry string type is not a string. */

function nothingSpecial(str) {
  return typeof str === "string" ? str.replaceAll(/[^a-zA-Z0-9 \t]/g, "") : "Not a string!";
  //return typeof str === "string" ? str.split("").filter(char => " abcdefghijklmnopqrstuvwxyz0123456789\t".includes(char.toLowerCase())).join("") : "Not a string!";
}
