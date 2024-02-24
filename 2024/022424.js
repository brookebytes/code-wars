//First non-repeating character - 5kyu
/* Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
 * As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
 * If a string contains all repeating characters, it should return an empty string ("") */

function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split("");
  let foundIndex = arr.findIndex((e) => arr.indexOf(e)==arr.lastIndexOf(e));
  return s[foundIndex] || "";
}
