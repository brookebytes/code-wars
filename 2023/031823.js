// Alphabet war - 7kyu
/*Write a function that accepts fight string consists of only small letters and return who wins the fight.*/

function alphabetWar(fight)
{
  let leftSide = {score: 0, letters: 'wpbs', powers: {'w':4,'p':3,'b':2,'s':1}};
  let rightSide = {score: 0, letters: 'mqdz', powers: {'m':4,'q':3, 'd':2,'z':1}};
  fight.split("").map(letter => {
    if (leftSide.letters.includes(letter)) {
      leftSide.score+=leftSide.powers[letter];
    }
    if (rightSide.letters.includes(letter)) {
      rightSide.score+=rightSide.powers[letter];
    }
  })
  if (leftSide.score===rightSide.score) {
    return 'Let\'s fight again!';
  } else {
    return leftSide.score > rightSide.score ? `Left side wins!` : `Right side wins!`
    }
}
