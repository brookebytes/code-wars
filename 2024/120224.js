// Row Weights - 7kyu

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

function rowWeights(array){
  let team1 = 0;
  let team2 = 0;
  array.forEach((e, i) => i%2==0 ? team1+=e : team2+=e);
  return [team1, team2];
}
