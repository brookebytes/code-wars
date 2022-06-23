//Help Suzuki complete his chores! - 7kyu
/*Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.*/

function choreAssignment(chores) {
  chores.sort((a,b) => a-b);
  let result = [];
  for (i=0; i<chores.length/2; i++){
    result.push(chores[i]+chores[chores.length-i-1]);
  }
  return result.sort((a,b) => a-b);
}
