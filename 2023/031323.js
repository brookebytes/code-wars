//Are You Playing Banjo? - 8kyu
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or "r" you are playing banjo. 

function areYouPlayingBanjo(name) {
  return name.charAt(0).toUpperCase()==='R' ? `${name} plays banjo` : `${name} does not play banjo`
}
