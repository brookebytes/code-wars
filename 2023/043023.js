//Remove the time - 8kyu
// Write a function that takes the website date/time in its original string format and returns the shortened format.

function shortenToDate(longDate) {
  return longDate.substring(0,longDate.indexOf(","))
}
