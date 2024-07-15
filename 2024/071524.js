// esreveR gnirtS

//Create reverse function for the String prototype
String.prototype.reverse = function() {
  //return this.split("").reverse().join("");
  let result = "";
  for (i = this.length-1; i >= 0; i--) {
    result += this[i];
  }
  return result;
}
