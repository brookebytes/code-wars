//Simple Fun #20: First Reverse Try

function firstReverseTry(arr) {
  return (arr.length < 2) ? arr : [ arr[arr.length-1], ...arr.slice(1,arr.length-1), arr[0] ]
}
