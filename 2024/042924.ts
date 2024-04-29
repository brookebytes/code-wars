//Help Bob count letters and digits - 7kyu
// Create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

export function countLettersAndDigits(input: string): number {
  const chars: string = "abcdefghijklmnopqrstuvwxyz0123456789";
  return input
    .toLowerCase()
    .split("")
    .filter(char => chars.includes(char))
    .length
}

