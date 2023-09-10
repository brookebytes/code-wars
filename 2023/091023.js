//Return Two Highest Values in List - 8kyu
//

function twoHighest(arr) {
  let set = new Set(arr);
  return arr.length > 1 ? [...set].sort((a,b) => b-a).slice(0,2) : arr;
}
