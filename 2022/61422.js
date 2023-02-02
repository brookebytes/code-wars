//Testing 1-2-3 - 7kyu
/*Write a function which takes a list of strings and returns each line 
* prepended by the correct number.*/
var number=function(array){
  return array.map((str, index) => `${index+1}: ${str}`);
}
