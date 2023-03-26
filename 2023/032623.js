//Is your period late? - 8kyu
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength) {
  return today > (last.setDate(last.getDate() + cycleLength));
}
