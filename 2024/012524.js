//Pirates!! Are the Cannons ready? - 8kyu

const cannonsReady = (gunners) => {
  return Object.values(gunners).every(status => status=="aye") ? "Fire!" : "Shiver me timbers!";
}
