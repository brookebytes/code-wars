// The Office I - Outed - 7kyu

function outed(meet, boss){
  meet[boss] = meet[boss]*2;
  let happinessValues = Object.values(meet);
  return happinessValues.reduce((acc, cur) => acc+cur,0)/happinessValues.length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
