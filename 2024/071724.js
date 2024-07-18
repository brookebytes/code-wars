// Logical calculator - 8kyu

function logicalCalc(array, op){
  let state = array[0];
  for (i=1; i<array.length; i++) {
    if (op=="AND") {
      state = state && array[i];
    } else if (op == "OR") {
      state = state || array[i];
    } else {
      state = state != array[i]
    }
  }
  return state;
}
