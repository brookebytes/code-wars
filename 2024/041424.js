//Sum it continuously - 7kyu

function add(arr) {
  return arr.map((num, i) => arr.slice(0, i+1).reduce((acc, cur) => acc+cur, 0));
}
