//Did we win the Super Bowl? - 7kyu

function didWeWin(plays){
  let yardsGained = 0;
  for (const play of plays) {
    switch (play[1]) {
      case "pass":
        yardsGained+=play[0];
        break;
      case "sack":
        yardsGained-=play[0];
        break;
      case "run":
        yardsGained+=play[0];
        break;
      case "turnover":
        return false;
    }
  }
  return yardsGained > 10;
}
