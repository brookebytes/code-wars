//Unique In Order - 6kyu
/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder=function(iterable){
  if (typeof iterable === 'string') {
    iterable = iterable.split("");
  }
  return iterable.filter((char,index) => char!=iterable[index+1]);
}
