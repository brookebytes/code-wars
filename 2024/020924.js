//Array Leaders (Array Series #3)

function arrayLeaders(numbers){
  return numbers.filter((num, i) => num > numbers.slice(i+1).reduce((acc, cur) => acc+cur, 0));
}
