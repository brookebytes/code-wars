//FIXME: Replace all dots - 8kyu
//fix the code so all "." are replaced by "-"
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

//Ghostbusters (whitespace removal) - 7kyu 
//Return the building(string) without any ghosts(whitespaces)!
//*solved without RegEx
function ghostBusters(building) {
  if (building.includes(" ")){
    return building.split(" ").join("");
  }
  return 'You just wanted my autograph didn\'t you?'
}
