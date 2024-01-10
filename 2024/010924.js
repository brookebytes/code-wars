//Reverse a Number - 7kyu

function reverseNumber(n) {
  let numStr = String(n).split("");
  return numStr[0]=="-" ? -Number(numStr.slice(1).reverse().join("")) : Number(numStr.reverse().join("")) ;
}
