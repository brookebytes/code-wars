//Alternating between three values - 7kyu
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

function f(x, cc) {
  let key = Object.keys(cc).find(key => cc[key]===x);
  return key=='a' ? cc['b'] : key==='b' ? cc['c'] : cc['a'];
}
