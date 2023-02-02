//Find Maximum and Minimum Values of a List - 8kyu
var min = function(list){
  return list.sort((a,b) => a-b)[0];
}

var max = function(list){
  return list.sort((a,b) => b-a)[0];
}
