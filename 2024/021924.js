//How many stairs will Suzuki climb in 20 years? - 8kyu

function stairsIn20(s){
  return s.flat().reduce((acc, cur) => acc+cur, 0) * 20;
}

/*
 function stairsIn20(s){
  return s.reduce((acc, day) => acc+day.reduce((acc, cur) => acc+cur), 0)*20;
}
*/
