//Multiplication table - 6kyu
/* Your task, is to create N×N multiplication table, of size provided in parameter. */

multiplicationTable = function(size) {
  let table = [];
  for (i=1; i<=size; i++) {
    let row = [];
    for (j=1; j<=size; j++) {
      row.push(i*j);
    }
    table.push(row);
  }
  return table;
}

