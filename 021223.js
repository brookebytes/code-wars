//Trimming a string
/* Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."
 * These dots at the end also add to the string length.
 * If the maximum string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
 * If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required. */

function trim(str, size) {
  return str.length>size ? ((str.length>size && str.length >=3) ? `${str.slice(0,size-3)}...` : `${str.slice(0,size)}...`) : str;
}
