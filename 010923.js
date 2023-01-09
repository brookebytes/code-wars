//How Many Unique Consonants? - 7kyu
/*Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters). Disregard duplicates*/

function countConsonants(str) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let consonantsFound = '';
  str.toLowerCase().split("").map(char => { if (consonants.includes(char) && !consonantsFound.includes(char))
    consonantsFound+=char;
  });
  console.log(`consonants = ${consonantsFound}  num counted = ${consonantsFound.length}`);
  return consonantsFound.length;
}

