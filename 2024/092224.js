// Clean up after your dog - 7kyu

function crap(x, bags, cap){
  if (x.flat().includes("D")) {
    return "Dog!!";
  }
  return (bags*cap) - x.flat().filter(e => e == "@").length >= 0 ? "Clean" : "Cr@p";
}
