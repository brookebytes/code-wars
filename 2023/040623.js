//Find all non-consecutive numbers - 7kyu
/*Your task is to find all the elements of an array that are non consecutive. You should return the results as an array of objects with two values: i: <the index of the non-consecutive number> and n: <the non-consecutive number>*/

function allNonConsecutive (arr) {
  let nonConsecutive = [];
  arr.forEach((num, i) => {
    if (arr[i+1]-arr[i]>1) {
      nonConsecutive.push({i: i+1, n: arr[i+1]});
    }
  });
  return nonConsecutive;
}
