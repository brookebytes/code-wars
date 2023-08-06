//They say that only the name is long enough to attract attention... - 8kyu
/* Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string. */

function isOpposite(s1,s2){
  if ((!s1.length && !s2.length) || s1.length!=s2.length) {
    return false;
  }
  let s2Arr = s2.split("");
  return s1
    .split("")
    .every((char, i) => char.toUpperCase()==char
           ? s2Arr[i]==char.toLowerCase()
           : s2Arr[i]==char.toUpperCase());
}
