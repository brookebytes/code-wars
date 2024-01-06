//Bumps in the Road - 7kyu

function bump(x){
  return x.split("").filter(char => char=="n").length <= 15 ? "Woohoo!" : "Car Dead";
}

