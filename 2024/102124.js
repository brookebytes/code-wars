// Pairs of integers from m to n - 7kyu
/* Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

The input m will always be smaller than or equal to n (e.g., m <= n) */

function generatePairs(m, n) {
  let pairs = [];
  for (i=m; i<=n; i++) {
    for (j=i; j<=n; j++) {
      pairs.push([i,j]);
    }
  }
  return pairs;
}
