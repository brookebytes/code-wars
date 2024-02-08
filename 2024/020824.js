//Maximum Gap (Array Series #4) - 7kyu

function maxGap (numbers){
  let maxDiff = 0;
  numbers = numbers.sort((a, b) => a-b);
  for (i=0; i<numbers.length; i++) {
    let diff = Math.abs(numbers[i+1]-numbers[i]);
    if (maxDiff < diff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
