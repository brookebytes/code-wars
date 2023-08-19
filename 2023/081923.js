//Small enough - 7kyu
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 

function smallEnough(a, limit){
  return a.every(num => num<=limit);
}
