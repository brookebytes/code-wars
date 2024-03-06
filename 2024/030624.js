//Digital Cypher - 7kyu

function encode(str,  n) {
  let key = String(n);
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return str.split("").map((char, i) => alphabet.indexOf(char) + Number(key[i%key.length]));
}
