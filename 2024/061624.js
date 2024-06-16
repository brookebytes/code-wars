// Partial Word Searching - 7kyu
/* Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings. */

function wordSearch(query, seq){
  query = query.toLowerCase();
  let matches = seq.filter(str => str.toLowerCase().includes(query));
  return matches.length > 0 ? matches : ["Empty"];
}
