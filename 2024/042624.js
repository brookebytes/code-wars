//Only One Gift Per Child - 7kyu

let seen = [];

function handOutGift(name) {
  if (seen.includes(name)) {
    throw new Error("This child has already received a gift.");
  }
  seen.push(name);
}
