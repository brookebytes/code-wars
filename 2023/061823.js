//Count up the points for the 7 Wonders board game! Easy version - 7kyu
// You will be given 3 inputs corresponding to the amount of each glyph you have acquired in the game. Your task is to output the final score. Take into account that you may have no glyphs at all!


function solve(compasses, gears, tablets) {
  let total = compasses*compasses + gears*gears + tablets*tablets;
  while (compasses>0 && gears > 0 && tablets > 0) {
    total+=7;
    compasses--;
    gears--;
    tablets--;
  }
  return total;
}
