//Cantor's Diagonals - 7kyu

function cantor(nestedList) {
  result = [];
  for (i=0; i<nestedList.length; i++) {
    result.push(nestedList[i][i] == 1 ? 0 : 1);
  }
  return result;
}
