//Sort the Vowels! - 7kyu

function sortVowels(s){
  if (typeof s == "string") {
    return s
      .split("")
      .map(char => "aeiouAEIOU".includes(char) ? `|${char}` : `${char}|`)
      .join("\n")
  }
  return "";
}
