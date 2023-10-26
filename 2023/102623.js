//Bubblesort Once - 7kyu
// return a new array equivalent to performing exactly 1 complete pass on the original array.

function bubblesortOnce(a) {
  let sorted = [...a];

  for (let i=0; i<sorted.length; i++) {
    let curr = sorted[i];
    for (let j=i+1; j<sorted.length; j++) {
      let temp;
      if (curr > sorted[j]) {
        temp = sorted[j];
        sorted[j] = curr;
        sorted[i] = temp;
        break;
      }
      break;
    }
  }
  return sorted;
}
