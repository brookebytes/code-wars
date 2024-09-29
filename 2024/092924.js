// The Office III - Broken Photocopier - 7kyu

function broken(x){
  return x.split("").map(e => e==1 ? 0 : 1).join("");
}
