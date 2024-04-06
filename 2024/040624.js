//Rock Paper Scissors Lizard Spock - 7kyu

function rpsls(pl1,pl2){
  const plays = { "scissors": ["paper", "lizard"], "paper": ["rock", "spock"], "rock": ["lizard", "scissors"],
                 "lizard": ["spock", "paper"], "spock": ["scissors", "rock"] };
  return plays[pl1].includes(pl2) ? "Player 1 Won!" : plays[pl2].includes(pl1) ? "Player 2 Won!" : "Draw!";
}
