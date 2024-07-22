// Check three and two - 7kyu

function checkThreeAndTwo(array) {
  if ([...new Set(array)].length != 2) {
    return false;
  }
  array = array.sort();
  return (array[0]==array[2] && array[3]==array[4]) || (array[0]==array[1] && array[2]==array[4])
}
