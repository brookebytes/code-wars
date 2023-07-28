//Exclamation marks series #2 - 8kyu
// Remove all exclamation marks from the end of sentence.

function remove (string) {
  while (string[string.length-1]=="!") {
    string = string.slice(0,string.length-1);
  }
  return string;
}
