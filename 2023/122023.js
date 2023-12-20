//Building Strings From a Hash - 7kyu

function solution(pairs){
  let keys = Object.keys(pairs);
  let values = Object.values(pairs);
  return keys.map((key, index) => `${key} = ${values[index]}`).join(",");
}
