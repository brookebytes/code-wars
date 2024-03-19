//80's Kids #5: You Can't Do That on Television - 7kyu

function bucketOf(str) {
  str = str.toLowerCase();
  let water = str.includes("water") || str.includes("wet") || str.includes("wash");
  let slime = str.includes("slime") || str.includes("i don't know");
  if (water && slime) {
    return "sludge";
  } else if (water) {
    return "water";
  } else if (slime) {
    return "slime";
  } else {
    return "air";
  }
}
