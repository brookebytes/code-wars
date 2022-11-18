//Alternating Case - 8kyu
/* Write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase */

String.prototype.toAlternatingCase = function () {
  return this.split("").map(char => {
    return char.toUpperCase()===char ? char.toLowerCase() : char.toUpperCase();
  }).join("");
}
