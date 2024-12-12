// Matrix creation - 7kyu
// Create an identity matrix of the specified size ( >= 0 ).

function getMatrix(number) {
  let matrix = [];
  for (i = 0; i < number; i++) {
    let row = [];
    for (j = 0; j < number; j++) {
      row.push(j == i ? 1 : 0)
    }
    matrix.push(row);
  }
  return matrix;
}
