//String Reordering - 7kyu
/* The input will be a string of dictionaries.
 * Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
 * The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty. */


function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((a, b) => Object.keys(a)-Object.keys(b))
    .map(obj => Object.values(obj))
    .join(" ");
}
