//Arguments to Binary addition - 8kyu
/* Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added. */

function arr2bin(arr){
  return arr.reduce((acc, cur) => typeof cur == "number" ? acc+cur : acc, 0).toString(2);
}
