//Maximum Product 

function adjacentElementsProduct(array) {
  let max = array[0]*array[1];
  for (i=0; i<array.length-1; i++) {
    if (array[i]*array[i+1] > max) {
      max = array[i]*array[i+1];
    }
  }
  return max;
}
