//Simple Fun #132: Learn Charitable Game - 7kyu

function learnCharitableGame(arr) {
  return arr.some(num => num>0) && arr.reduce((acc, cur) => acc+cur, 0)%arr.length==0;
}
