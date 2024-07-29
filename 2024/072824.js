// Range function - 6kyu

function range(start = 1, step = 1, stop = 1) {
  if (arguments.length == 1) {
    stop = arguments[0];
    start = 1;
  } else if (arguments.length == 2) {
    start = arguments[0];
    stop = arguments[1];
    step=1;
  }
  let arr = [];
  for (i=start; i<=stop; i+=step) {
    arr.push(i);
  }
  return arr;
}
