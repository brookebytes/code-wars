//Generate range of integers - 8kyu

function generateRange(min, max, step){
  let range = [];
  for (i=min; i<=max; i+=step) {
    range.push(i);
  }
  return range;
}
