//Delete occurences of an element if it occurs more than n times - 6kyu
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.


function deleteNth(arr,n){
  let count = {};
  let result = [];

  for (i=0; i<arr.length; i++) {
    let num = arr[i];
    count[num] ? count[num]+=1 : count[num]=1;
    if (count[num] <= n) {
      result.push(num);
    }
  }

  return result;
}
