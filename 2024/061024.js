// Where Are My Glasses - 7kyu
/* Return the index of the string in the list that contains the glasses. They look like two capital O's with at least one dash in between. */

function findGlasses(arr){
  return arr.findIndex(str => /O-+O/.test(str));
}
