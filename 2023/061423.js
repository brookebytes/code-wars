// Find factors of a number - 7kyu
// Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

function factors(x){
  let factors = [];
  if (x < 1 || !Number.isInteger(x)) {
    return -1;
  }
  for (i=x; i>=0; i--) {
    if (x%i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
