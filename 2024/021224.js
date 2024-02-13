//Reversing Fun - 7kyu

function flipNumber(n){
  let arr = n.split("").reverse();
  for (i=1; i<n.length-1; i++) {
    arr = arr.slice(0,i).concat(arr.slice(i).reverse());
  }
  return arr.join("");
}
