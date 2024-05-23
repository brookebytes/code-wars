//Print count and numbers - 7kyu
/* Given a string of integers, coutn how many times that integer repeats itself, then return a string showing the count and the integer. Ex: "1123" will be 2112213 and "211213" will return "1221121113". Return "" for empty, nil or non numberic strings. */

function countMe(data){
  let result = "";
  for (i = 0; i < data.length; i++) {
    if (!"0123456789".includes(data[i])) {
      return "";
    }
    let count = 1;
    while (data[i] == data[i+1]) {
      count++;
      i++;
    }
    result += count + data[i];
  }
  return result;
}
