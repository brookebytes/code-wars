//Help the Fruit Guy - 7kyu

function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(fruit => fruit.includes("rotten") ? fruit.slice(6).toLowerCase() : fruit.toLowerCase()) : [];
}
