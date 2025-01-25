// Disarium Number (Special Number Series #3) - 7kyu
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
// Given a number, Find if it is Disarium or not .

function disariumNumber(n){
  return [...n.toString()].reduce((acc, e, i) => acc+(e**(i+1)),0) == n ? "Disarium !!" : "Not !!";
}
