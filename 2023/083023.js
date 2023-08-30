//The Vowel Code - 6kyu
// Create an encode and decode function to replace all lowercase vowels with the given number, or to turn the numbers back into vowels.

function encode(string) {
  const vowels = 'aeiou';
  return string.split("").map(char => vowels.includes(char) ? vowels.indexOf(char)+1 : char ).join("");
}

function decode(string) {
  const vowels = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
  return string.split("").map(char => vowels[char] ? vowels[char] : char).join("");
}
