// Number Pairs - 7kyu

function getLargerNumbers(a, b) {
  return a.map((e, i) => Math.max(e, b[i]));
}
