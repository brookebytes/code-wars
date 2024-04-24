//A Letter's Best Friend - 7kyu

function bestFriend(txt, a, b) {
  let chars = txt.split("");
  for (i=0; i<chars.length; i++) {
    if (chars[i] == a && chars[i+1]!=b) {
      return false;
    }
  }
  return true;
}
