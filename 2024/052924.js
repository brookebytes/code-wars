//Holiday VII - Local Talk - 7kyu
/* Turn any sentence provided into ex-pat balinese waffle by inserting the word "pak" between every other word. 
 * Pak should not be the first or last word. Strings of just spaces should return an empty string. */

function pak(s){
  return s.split(" ").map(word => word!="" ? "pak " + word : word).join(" ").slice(4);
}
