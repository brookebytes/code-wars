//Remove consecutive duplicate words - 7kyu
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.

function removeConsecutiveDuplicates(string) {
  let words = string.split(" ");
  return words.filter((word, index) => word!=words[index+1]).join(" ");
}
