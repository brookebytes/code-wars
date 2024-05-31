//Remove the noise from the string - 7kyu
/* Write a function which removes this noise from the message. */

function removeNoise(str){
  return str.split("").filter(char => !"%$&/#·@|ºª\\".includes(char)).join("");
}
