//Difference between two collections - 7kyu
/* Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.
 * The collections can contain any character and can contain duplicates.*/

function diff(a, b){
  return [ ...new Set(a.filter(char => !b.includes(char)).concat(b.filter(char => !a.includes(char))).sort()) ];
}

/*
  let maxLength = Math.max(a.length, b.length);
  let result = [];
  for (i = 0; i < maxLength; i++) {
    if (a[i] && !b.includes(a[i]) && !result.includes(a[i])) {
      result.push(a[i]);
    }
    if (b[i] && !a.includes(b[i]) && !result.includes(b[i])) {
      result.push(b[i]);
    }
  }
  return result.sort();
*/
