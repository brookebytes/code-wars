//Thinkful - Logic Drills: Umbrella decider - 7kyu

function takeUmbrella(weather, chance) {
  if (weather == "rainy" || (weather == "cloudy" && chance > 0.20)) {
    return true;
  }
  return chance < 0.51 ? false : true;
}
