//Head, Tail, Init and Last - 7kyu
// TODO: implement the four functions specified.

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0,arr.length-1);
}

function last(arr) {
  return arr[arr.length-1];
}
