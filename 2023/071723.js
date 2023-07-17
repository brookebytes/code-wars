//+1 Array - 6kyu
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

function upArray(arr){
  if (!arr.every(num => num>=0 && num<10) || arr.length<1) {
    return null;
  }

  let i = arr.length-1;

  while (arr[i]==9) {
    arr[i]=0;
    i--;
  }

  arr[i]!=null ? arr[i]+=1 : arr.unshift(1);

  return arr;
}
