//Sort deck of cards - 7kyu

function sortCards(array){
  let deck = ["A",2,3,4,5,6,7,8,9,"T","J","Q","K"];
  return array.sort((a,b) => deck.indexOf(a)-deck.indexOf(b));
}
