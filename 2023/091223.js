//Loneliest character - 6kyu
/* Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.
 * - the string can have leading/trailing spaces - you should not count them
 * - the strings contain only unique characters from a to z
 * - the order of characters in the returned array doesn't matter
 */

function loneliest(str) {
  if (str.trim().length == 1) {
    return [str.trim()];
  }

  let strArr = str.trim().split("");
  let charCount = {};

  for (i=0; i<strArr.length; i++) {
    let count = 0;
    let j = i-1;
    let k = i+1;

    if (strArr[i] !== ' ') {
      while (strArr[j]==' ') {
        count++;
        j--;
      }
      while (strArr[k]==' '){
        count++;
        k++;
      }
      charCount[strArr[i]]=count;
    }
  }

  let max = Math.max(...Object.values(charCount));
  return [...Object.keys(charCount)].filter(key => charCount[key] == max);
}
