//Simple remove duplicates - 7kyu
//

function solve(arr) {
  return arr.filter((num, index) => arr.lastIndexOf(num)==index)
}
