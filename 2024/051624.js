//Basic Sequence Practice - 7kyu

function sumOfN(n) {
  let sequence = [0];
  let sign = n > 0 ? 1 : -1;
  console.log(sign)
  for (let i = 1; i <= Math.abs(n); i++) {
    sequence.push(sequence[i-1] + i * sign)
  }
  return sequence;
}
