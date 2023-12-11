//Distance from the average - 7kyu

function distancesFromAverage(arr){
  let average = arr.reduce((acc, cur) => acc+cur,0)/arr.length;
  return arr.map(num => Math.round((average-num)*100) / 100);
}
