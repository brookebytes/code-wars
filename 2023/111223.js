//Array Mash - 7kyu

function arrayMash (array1, array2) {
  let mashed = [];
  for (i=0; i<array1.length; i++) {
    mashed.push(array1[i]);
    mashed.push(array2[i]);
  }
  return mashed;
}
