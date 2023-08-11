//Is n divisible by (...)?
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(){
  let n = arguments[0];
  return [...arguments].slice(1).every(num => n%num==0);
}
