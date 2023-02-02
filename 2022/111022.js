//Calculate average - 8kyu
// Write a function which calculates the average of the numbers in a given list. (Empty arrays should return 0).

function findAverage(array) {
  return array.length>0 ? array.reduce((acc, curVal) => acc+curVal)/array.length : 0;
}


//Keep up the hoop - 8kyu
// Write a program where Alex can input how many times the hoop goes around and it will return him an encouraging message

const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
