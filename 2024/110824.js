//Two Oldest Ages - 7kyu
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a, b) => a-b).slice(-2);
}
