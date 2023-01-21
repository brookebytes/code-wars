//Sort array by string length - 7kyu

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length-b.length);
};
