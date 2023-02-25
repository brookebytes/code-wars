//Number of Occurrences - 7kyu
/* Write a function that returns the number of occurrences of an element in an array.
 * This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object */

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
  value : function numberOfOccurrences(element) {
    return this.filter(num => num===element).length
  }
});
