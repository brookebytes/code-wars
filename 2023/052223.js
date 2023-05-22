//Make acronym - 7kyu
// Write function which takes a string and make an acronym of it.

function toAcronym(inp){
  return inp.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
}
