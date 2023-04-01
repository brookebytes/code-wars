//Decreasing Inputs - 7kyu
/* You will create a function named add. It will return the sum of all the arguments. The inputs will gradually decrease with their index as parameter to the function. The sum must be rounded if it is a float. */

function add() {
  let sum = 0;
  let count = 1;
  for (i=0; i<arguments.length; i++){
    sum+=arguments[i]/count;
    count++;
  }
  return Math.round(sum);
}
