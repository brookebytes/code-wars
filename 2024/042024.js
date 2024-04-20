//The Pony Express - 7kyu

function riders(stations) {
  let ridersCount = 1;
  let milesLeft = 100;

  for (i = 0; i < stations.length; i++) {
    if (milesLeft >= stations[i]) {
      milesLeft -= stations[i];
    } else {
      ridersCount ++;
      milesLeft = 100 - stations[i];
    }
  }

  return ridersCount;
}
