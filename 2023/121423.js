//Good vs Evil - 6kyu

function goodVsEvil(good, evil){
  const goodForces = [1, 2, 3, 3, 4, 10];
  const evilForces = [1, 2, 2, 2, 3, 5, 10];
  let goodWorth = good.split(" ").reduce((acc, cur, index) => acc+(goodForces[index]*cur), 0);
  let evilWorth = evil.split(" ").reduce((acc, cur, index) => acc+(evilForces[index]*cur), 0);
  if (goodWorth == evilWorth) {
    return "Battle Result: No victor on this battle field"
  }
  return goodWorth > evilWorth ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
}

