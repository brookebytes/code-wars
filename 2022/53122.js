//Find all pairs - 7kyu
/*You are given array of integers, your task will be to count all pairs in that
* array and return their count.*/
function duplicates(array){
  array.sort((a,b) => a-b);
  let count = 0;
  for (i=0; i<array.length; i++){
    if (array[i]==array[i-1] || array==array[i+1]){
        count++
        array.splice(i,1);
      }
  }
  return count;
}

//Maximum Length Difference - 7kyu
/*You are given two arrays a1 and a2 of strings. Each string is composed with
 * letters from a to z. Let x be any string in the first array and y be any 
 * string in the second array. Find max(abs(length(x) − length(y)))*/
function mxdiflg(a1, a2) {
  if (a1.length ==0 || a2.length == 0){
    return -1;
  }
  let a1Sorted = a1.sort((a,b) => b.length-a.length);
  let a2Sorted = a2.sort((a,b) => a.length-b.length);
  let result1 = Math.max(Math.abs(a1Sorted[0].length-a2Sorted[0].length));
  let result2 = Math.max((Math.abs((a2Sorted[a2.length-1].length-a1Sorted[a1.length-1].length))))
  return result1 > result2 ? result1 : result2;
}
