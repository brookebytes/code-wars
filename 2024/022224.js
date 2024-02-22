//Possibilites Array - 7kyu

function isAllPossibilities(x){
  return x.length>0 ? x.every((num, i) => x.includes(i)) : false;
}
