//Find array - 7kyu

function findArray(arr1, arr2){
  return arr1.length<1 ? [] : arr2.map(n => arr1[n]);
}


