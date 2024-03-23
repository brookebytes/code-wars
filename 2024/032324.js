//Find the Difference in Age between Oldest and Youngest Family Members - 8kyu

function differenceInAges(ages){
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  return [min, max, max-min];
}

