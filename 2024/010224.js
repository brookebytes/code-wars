//If you can't beat em, join em! - 7kyu

function cantBeatSoJoin(numbers) {
  return numbers.sort((a, b) => b.reduce((acc, cur) => acc+cur, 0) - a.reduce((acc, cur) => acc+cur, 0)).flat();
}
