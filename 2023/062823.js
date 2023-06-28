//Day of the Year - 7kyu
// Work out what number day of the year it is.

function toDayOfYear(arr) {
  let days = 0;
  const months = {1: 31, 2: 28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
  for (i=1; i<arr[1]; i++) {
    days += months[i];
  }
  return (arr[1]>2 && arr[2]%4==0 && (arr[2]%100!=0 || arr[2]%400==0)) ? days+arr[0]+1 : days+arr[0];
}
