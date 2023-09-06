//WeIrD StRiNg CaSe - 6kyu
/* Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word. */

function toWeirdCase(string) {
  return string
    .split(" ")
    .map(word => word
         .split("")
         .map((char, index) => index%2==0 ? char.toUpperCase() : char.toLowerCase())
         .join(""))
    .join(" ");
}
