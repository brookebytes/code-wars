//Return the day - 8kyu
//Write a function which returns the weekday according to the input Number, otehrwise return "Wrong, please enter a number between 1 and 7"

function whatday(num) {
  const daysOfWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  };
  console.log(daysOfWeek[num]);
  return (num>0 && num<8) ? daysOfWeek[num] : "Wrong, please enter a number between 1 and 7";
}
