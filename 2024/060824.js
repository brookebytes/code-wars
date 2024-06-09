//Spot the Differences - 7kyu
/* Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. */

function spot(s1,s2){
  let result = [];
  for (i = 0; i < s2.length; i++) {
    if (s1[i] != s2[i]) {
      result.push(i);
    }
  }
  return result;
}
