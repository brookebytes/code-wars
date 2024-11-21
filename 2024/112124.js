// Swap Values - 8kyu
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

function swapValues() {
  let args = Array.prototype.slice.call(arguments).flat();
  let temp = args[0];
  arguments[0][0] = args[1];
  arguments[0][1] = temp;
  return arguments;
}
