//Pillars - 8kyu
//Calculate the distance between the first and last pillar in centimeters (without the width of the first and last pillar)

function pillars(numPill, dist, width) {
  let n = numPill-1;
  return numPill>1 ? (n*dist*100)+(width*(n-1)) : 0;
}
