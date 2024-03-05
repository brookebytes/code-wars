//Rock Off! - 7kyu

function solve(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  a.forEach((el, i) => {
    if (el == b[i]) return;
    return el > b[i] ? aliceScore++ : bobScore++
  });
  let finalMessage = aliceScore == bobScore ? "that looks like a \"draw\"! Rock on!" : aliceScore > bobScore
    ? "Alice made \"Kurt\" proud!" : "Bob made \"Jeff\" proud!";
  return `${aliceScore}, ${bobScore}: ${finalMessage}`;
}
