// Print a Rectangle Using Asterisks - 7kyu
/* Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.
 * The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).
 * End each line of the string (including the last one) with a carriage return-line feed combination.
 * Note: You may assume that width and height will always be greater than zero. */

function getRectangleString(width, height) {
  let result = "";
  for (i=1; i<=height; i++) {
    if (i == 1 || i == height) {
      result += "*".repeat(width) + "\r\n";
    } else {
      result += "*" + " ".repeat(width-2) + "*\r\n";
    }
  }
  return result;
}
