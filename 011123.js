//MinMinMax - 7kyu
/*Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
 * You may assume the input is well-formed.*/

function minMinMax(array) {
  let sorted = array.sort((a,b) => a-b);
  for (i=sorted[0]; i++; i<sorted[sorted.length-1]){
    if (!array.includes(i)) {
      console.log(i);
      return [sorted[0], i, sorted[sorted.length-1]]
      break;
    }
  }
}
