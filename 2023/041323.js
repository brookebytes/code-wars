//Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark - 7kyu

function remove (string) {
  return string.split(" ").filter(word => {
    let count = 0;
    word.split("").forEach(char => {
      if (char=="!") {
        count++;
      }
      return count;
    })
    return count!=1;
  })
  .join(" ");
}
