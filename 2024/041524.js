//Frog's Dinner - 7kyu

//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
  let chrisCount = 0;
  let tomCount = 0;
  let catCount = 0;

  for (i=1; i<=n; i++) {
    chrisCount += i;
  }
  for (i=1; i<=(chrisCount/2); i++) {
    tomCount += i;
  }
  for (i=1; i<=(chrisCount+tomCount); i++) {
    catCount += i;
  }
  return `Chris ate ${chrisCount} flies, Tom ate ${tomCount} flies and Cat ate ${catCount} flies`;
}
