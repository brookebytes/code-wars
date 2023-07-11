//Will there be enough space? - 8kyu
// Return the number of people who won't fit on the bus. 

function enough(cap, on, wait) {
  return cap>=(on+wait) ? 0 : Math.abs(cap-on-wait);
}
