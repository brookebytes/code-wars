//Who Took The Car Key? - 7kyu
// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

function whoTookTheCarKey(message) {
  return message.map(bin => parseInt(bin,2)).map(dec => String.fromCharCode(dec)).join("");
}
