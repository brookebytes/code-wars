//Sum of the first nth term of Series - 7kyu
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  let sum = 0;
  let num = 1;
  for (i=1; i<=n; i++) {
    sum += 1/num;
    num += 3;
  }
  return `${sum.toFixed(2)}`;
}
