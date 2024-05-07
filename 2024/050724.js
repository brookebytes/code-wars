//De-Emojify - 7kyu

function deEmojify(emojiString) {
  const emotes = {":)": 0, ":D": 1, ">(": 2, ">:C": 3, ":/": 4, ":|": 5, ":O": 6, ";)"  : 7, "^.^": 8, ":(": 9, };
  if (!emojiString.length > 0) {
    return "";
  }
  return emojiString
    .split("  ")
    .map(chain => String.fromCharCode(chain.split(" ").map(e => emotes[e]).join("")))
    .join("");
}
