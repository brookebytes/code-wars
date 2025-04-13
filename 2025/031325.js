// Find twins - 7kyu
/* Agent 47, you have a new task!
* Among citizens of the city X are hidden 2 dangerous criminal twins.
Your task is to identify them and eliminate!

* Everyone except the twins are single-born (i.e., unique individuals).

* Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.

* If there are no twins in the city - return None or the equivalent in the language that you are using. */

function elimination(arr){
  for (i=0; i<arr.length; i++) {
    if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
      return arr[i]
    }
  }
  return null;
}
