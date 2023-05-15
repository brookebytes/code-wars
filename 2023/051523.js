//Most Likely - 7kyu
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

function mostLikely(prob1,prob2){
  prob1 = prob1.split(":");
  prob2 = prob2.split(":");
  return prob1[0]/prob1[1] > prob2[0]/prob2[1];
}
