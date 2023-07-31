//TIY-FizzBuzz - 7kyu
// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value.

function tiyFizzBuzz(sentence){
  return sentence
    .split(" ")
    .map(word => word
         .split("")
         .map(char =>
              {
                if ("AEIOU".includes(char)) {
                  return "Iron Yard";
                } else if ("BCDFGHJKLMNPQRSTVWXYZ".includes(char)) {
                  return "Iron";
                } else {
                  return "aeiou".includes(char) ? "Yard" : char;
                }
              })
         .join(""))
    .join(" ");
}
