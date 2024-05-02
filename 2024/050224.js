//String basics - 7kyu
// Note: Try to find a solution using only the built-in String methods.

function getUsersIds(str){
  return str
    .split(",")
    .map(s => s
    .toLowerCase()
    .split("")
    .filter(char => char!="#")
    .join("")
    .trim()
    .slice(3)
    .trim());
}
