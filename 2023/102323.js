//Plus - minus - plus - plus - ... - Count - 7kyu
// Count how often sign shanges in array.

function catchSignChange(arr) {
  return arr.reduce((acc, curr, i) => {
    if ( (curr>=0 & arr[i+1]<0) || (curr<0 && arr[i+1]>=0) ) {
      return acc+=1;
    }
    else {
      return acc;
    }
  }, 0);
}
