//Sort and Star - 8kyu
//Sort the list of strings alphabetically and return the first value with each letter separated by ***

function twoSort(s) {
  return s.sort()[0].split("").join('***');
}
