// Simple Fun #182: Happy "g" - 7kyu

function gHappy(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] == "g" && !(str[i-1]=="g" || str[i+1]=="g")) {
      return false;
    }
  }
  return true;
}
