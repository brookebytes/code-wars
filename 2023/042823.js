//Did she say hallo? - 8kyu
/* You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
 * Write a simple function to check if the string contains the word hallo in different languages.*/

function validateHello(greetings) {
  const languages = ['hello','ciao','salut','hallo','hola','ahoj','czesc'];
  return languages.some(word => greetings.toLowerCase().includes(word));
}
