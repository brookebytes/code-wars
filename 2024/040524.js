//Well of Ideas - Easy Version - 8kyu

function well(x){
  let numGoodIdeas = x.filter(idea => idea=="good").length;
  return numGoodIdeas > 2 ? "I smell a series!" : numGoodIdeas<=0 ? "Fail!" : "Publish!";
}
