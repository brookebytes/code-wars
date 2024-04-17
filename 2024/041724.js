//Change two-dimensional array - 7kyu

function matrix(array) {
  let result = array;

  for (i = 0; i < array.length; i++) {
    result[i][i] = result[i][i] < 0 ? 0 : 1;
  }

  return result;
}
