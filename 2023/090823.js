//Vampire Numbers - 7kyu
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

function vampireTest(a, b) {
  if (a<0 && b<0) {
    return false;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  let product = [...String(a*b)].sort((a,b) => a-b).join("");
  let fangs = [...(String(a) + String(b))].sort((a,b) => a-b).join("");

  return fangs==product;
}
