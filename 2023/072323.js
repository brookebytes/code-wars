//Help Suzuki count his vegetables... - 7kyu
/* Return a list of objects (tuple in Python, array in JavaScript, table in COBOL) with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A). */

function countVegetables(string){
  const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
  let veggiesCount = {};
  let result = [];

  string
    .split(" ")
    .sort()
    .reverse()
    .filter(item => vegetables.includes(item))
    .map(veggie => veggiesCount[veggie] ? veggiesCount[veggie]+=1 : veggiesCount[veggie]=1);

  Object.keys(veggiesCount)
    .sort((a,b) => veggiesCount[b]-veggiesCount[a])
    .map(key => result.push([veggiesCount[key], key]));

  return result;
}
