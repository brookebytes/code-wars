//How many consecutive numbers are needed? - 7kyu
/*Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.*/

function consecutive(arr) {
  arr = arr.sort((a,b) => a-b);
  let count = 0;
  arr.forEach((num, i) => {
    if ((arr[i+1]-arr[i])>=1) {
      count += Math.abs(arr[i+1]-arr[i]-1)
    }
  });
  return count;
}
