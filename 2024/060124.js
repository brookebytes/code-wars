//Trigrams - 7kyu
/* Trigrams are a special case of the n-gram, where n is 3. One trigram is a continous sequence of 3 chars in phrase.
 * -return all trigrams for the given phrase
 * -replace spaces with underscore (_)
 * -return an empty string for phrases shorter than 3
 * */

function trigrams( phrase ) {
  let chars = phrase.split("").map(char => char===" " ? "_" : char).join("");
  let i = 0;
  let result = "";
  while (i+3 <= phrase.length) {
    result += chars.slice(i,i+3) + " ";
    i++;
  }
  return result.trim();
}
