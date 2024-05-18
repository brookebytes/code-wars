//Find the missing element between two arrays - 7kyu
/* Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element. The first array will always have at least one element. */

function findMissing(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a-b);
  arr2 = arr2.sort((a, b) => a-b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return arr1[i];
    }
  }
}

