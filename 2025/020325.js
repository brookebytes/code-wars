// Polish alphabet - 8kyu
// Your task is to change the letters in the Polish alphabet with diacritics and print out the string without the use of the Polish letters.

function correctPolishLetters (string) {
  const diacritics = {"ą": "a", "ć": "c","ę": "e","ł": "l","ń": "n","ó": "o","ś": "s","ź": "z","ż": "z"};
  return string.split("").map(e => diacritics[e] ? diacritics[e] : e).join("");
}
