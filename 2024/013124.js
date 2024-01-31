//Duplicate Arguments - 6kyu

function solution(){
 // return true if this method is called with duplicate argument values
  return !Object.values(arguments).every((arg, i, arr) => arr.indexOf(arg) == arr.lastIndexOf(arg));
}
