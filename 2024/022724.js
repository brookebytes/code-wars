//Most digits - 7kyu

function findLongest(array){
  let maxDigits = 0;
  let maxElement = array[0];
  for (i=0; i<array.length; i++) {
    if (array[i].toString().length > maxDigits) {
      maxDigits = array[i].toString().length;
      maxElement = array[i];
    }
  }
  return maxElement;
}
