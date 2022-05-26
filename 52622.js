//Sum of differences in array - 8kyu
//Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
  let sum = 0;
  let reversed = arr.sort((a,b) => b-a);
  for (i=0; i<reversed.length-1; i++){
    sum += reversed[i]-reversed[i+1];
  }
  return sum;
}
