//Elevator Distance - 7kyu

function elevatorDistance(array) {
  let count = 0;
  for (i=0; i<array.length-1; i++) {
    count+= Math.abs(array[i] - array[i+1]);
  }
  return count;
}
