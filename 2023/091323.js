//Character Concatenation
/* Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
 * If the string's length is odd drop the central element. */

function charConcat(string){
  let chars = string.split("")
  let result = "";
  let limit = chars.length%2==0 ? chars.length/2 : (chars.length/2)-1;

  for (i=0; i<limit; i++) {
    result += chars[i] + chars[(chars.length-1)-i] + (i+1)
  }

  return result;
}
