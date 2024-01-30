//Word values - 7kyu

function wordValue(a) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return a.map((str, index) => str.split("").reduce((acc,cur) => acc+alphabet.indexOf(cur), 0) * (index+1));
}
