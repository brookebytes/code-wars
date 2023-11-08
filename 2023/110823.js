//Cycle a list of values - 6kyu

function cycle(dir, arr, cur) {
  if (!arr.includes(cur)) {
    return null;
  }
  let curIndex = arr.indexOf(cur);

  if (dir == -1) {
    return curIndex<1 ? arr[arr.length-1] : arr[curIndex-1];

  }
  return (curIndex==(arr.length-1)) ? arr[0] : arr[curIndex+1];
}
