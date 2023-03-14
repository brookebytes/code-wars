//Beginner Series #2 Clock - 8kyu
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  let totalSeconds = s;
  totalSeconds += (h*3600)+(m*60);
  return totalSeconds*1000;

}

/*
function past(h,m,s) {
  return ((s)+(h*3600)+(m*60))*1000;
}
*/
