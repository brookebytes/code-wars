//Cat years, Dog years - 8kyu
//Return their respective ages now as [humanYears,catYears,dogYears].
var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears==1){
    return [1,15,15];
  }
  else if (humanYears==2){
    return [2,24,24];
  }
  return [humanYears, (24+(humanYears-2)*4), (24+(humanYears-2)*5)];
}

//Merge two sorted arrays into one
// Your task is to find a way to merge them into a single one, sorted in asc order.
function mergeArrays(arr1, arr2) {
  for (x of arr2) {
    if (!arr1.includes(x)){
      arr1.push(x);
    }
  }
  return arr1.sort((a,b) => a-b);
}
