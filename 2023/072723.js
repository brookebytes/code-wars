//Training JS #18: Methods of String object - 8kyu
/* The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces. */

function splitAndMerge(string, separator) {
  return string.split(" ").map(el => el.split("").join(separator)).join(" ");
}
