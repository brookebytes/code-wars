//Selective fear of numbers - 7kyu
// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)t

var AmIAfraid = function(day, num){
  const afraid = {'Monday': [12], "Tuesday": [96], "Wednesday": [34], "Thursday": [0], "Friday": [2], "Saturday": [56], "Sunday": [666, -666]};
  return afraid[day].includes(num) || (day==="Tuesday" && num>95) || (day==="Friday" && num%2==0);
}
