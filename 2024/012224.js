//Swap the head and the tail - 7kyu

function swapHeadAndTail(arr) {
  let size = Math.floor(arr.length/2);
  return arr.length%2==0 ? arr.slice(size).concat(arr.slice(0,size)) : arr.slice(size+1).concat(arr[size], arr.slice(0,size));
}
