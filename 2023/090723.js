//Area of a Circle - 7kyu
/* Complete the function which will return the area of a circle with the given radius.
 * Round the returned number to two decimal places. If the radius is not positive or not a number, return false. */

var circleArea = function(radius) {
  console.log(radius)
  if (typeof radius != "number") {
    return false;
  }
  return radius>0 ? Math.round(Math.PI*(radius**2)*100)/100 : false;
};
