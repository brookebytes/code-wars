// Finding length of the sequence - 7kyu
/* You need to find the length of the sub-array that begins and ends with the specified number. There will only be numbers (positive or negative) in the supplied array. If there are less or more than two occurrences of the number to search for, return 0. */

var lengthOfSequence = function (arr, n) {
  let sequence = arr.slice(arr.indexOf(n), arr.lastIndexOf(n)+1);
  return (sequence.slice(1,sequence.length-1).includes(n) || sequence.length<=1) ? 0 : sequence.length;
};
