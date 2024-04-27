//Test's results - 7kyu

function testResult(array) {
  let marks = {'h': 0, 'a': 0, 'l': 0};
  let average = Number((array.reduce((acc, cur) => acc+cur, 0)/array.length).toFixed(3));

  array.map(num => num >= 9 ? marks['h']++ : num<= 6 ? marks['l']++ : marks['a']++);

  if (marks['a']==0 && marks['l']==0) {
    return [average, marks, 'They did well'];
  }

  return [average, marks];
}
