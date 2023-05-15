//Total amount of points - 8kyu
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above

function points(games) {
  return games.reduce((acc,game) => {
    if(Number(game.charAt(0))>Number(game.charAt(2))){
      console.log('here')
       acc+=3;
       }
    else if (Number(game.charAt(0))==Number((game.charAt(2)))){
        acc+=1;
        }
    return acc;
  },0);
}
