//Digital cypher vol 2 - 7kyu

function decode  (code, n) {
  let key = String(n);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return code.map((num, i) => alphabet[(num-key[i%key.length])-1]).join("");
}

