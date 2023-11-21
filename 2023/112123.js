//Even odd disparity - 7kyu

function solve(a){
  let even = a.filter(char => !"abcdefghijklmnopqrstuvwxyz".includes(char) && char%2==0);
  let odd = a.filter(char => !"abcdefghijklmnopqrstuvwxyz".includes(char) && char%2!=0);
  return even.length-odd.length;
};
