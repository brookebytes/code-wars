//sPoNgEbOb MeMe - 7kyu
function spongeMeme(sentence) {
  let letters = sentence.toLowerCase().split("");
  for (i=0; i<letters.length; i++){
    if (i%2==0){
      letters[i] = letters[i].toUpperCase();
    }
  }
  return letters.join("");
}
