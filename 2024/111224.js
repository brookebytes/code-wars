// Apparently-Modifiying Strings - 7kyu
/* For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).
 * If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.
 * If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates). */

function apparently(string) {
  return string
    .split(" ")
    .map((word, i, ary) => (word=="and" || word=="but") && ary[i+1]!="apparently" ? `${word} apparently` : word)
    .join(" ");
}
