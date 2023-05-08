//DNA to RNA Conversion - 8kyu
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  while(dna.includes('T')) {
    dna = dna.replace('T','U');
  }
  return dna;
}
