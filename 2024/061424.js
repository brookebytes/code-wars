// Geometric sequence - sum of all elements - 7kyu

function GeometricSequenceSum(a, r, n) {
  let sum = a;
  let prev = a;
  for (i = 2; i <= n; i++) {
    prev *= r;
    sum += prev;
  }
  return sum;
}
