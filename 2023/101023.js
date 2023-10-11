//Complementary DNA - 7kyu

function DNAStrand(dna){
  const complements = { "A": "T", "T": "A", "C": "G", "G": "C" };
  return dna.split("").map(char => complements[char]).join("");
}
