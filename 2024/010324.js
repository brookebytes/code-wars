//Gryffindor vs Slytherin Quidditch Game - 7kyu

function gameWinners(gryffindor, slytherin) {
  const snitchPoints = {"yes": 150, "no": 0};
  gryffindor = (gryffindor[0] + snitchPoints[gryffindor[1]]);
  slytherin = (slytherin[0] + snitchPoints[slytherin[1]]);
  return gryffindor == slytherin ? "It's a draw!" : gryffindor > slytherin ? "Gryffindor wins!" : "Slytherin wins!";
};
