//New season, new league - 7kyu
//

function premierLeagueStandings(teamStandings) {
  let newSeason = { 1: teamStandings[1] } ;
  delete teamStandings[1];
  let teams = Object.values(teamStandings).sort().map((team, index) => newSeason[index+2]=team);
  return newSeason;
}
