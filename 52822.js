//makeBackronym - 7kyu
/*Transform the given string (without spaces) to a backronym, using the 
 * preloaded dictionary and return a string of words, separated with a single 
 * space (but no trailing spaces).*/

//preload variable: dict

var makeBackronym = function(string){
  return string.toUpperCase().split("").map(char => dict[char]).join(" ");
};
