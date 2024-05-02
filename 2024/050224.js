//String basics - 7kyu

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
