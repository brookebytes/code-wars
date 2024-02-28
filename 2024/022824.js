//Simple Fun #17: Rounders - 7kyu

function rounders(value) {
  let digits = value.toString().split("").map(el => Number(el));
  for (i=digits.length-1; i > 0; i--) {
    if (digits[i]>=5) {
      digits[i-1] += 1;
    }
    digits[i] = 0;
  }
  return Number(digits.join(""));
}
