// Every nth array element. (Basic) - 7kyu
// Create a function (a method in Ruby, an extension method in C#) every which returns every nth element of an array.

function every(arr, interval=1, start=0){
  return arr.slice(start).filter((e,i) => i%interval==0)
}
