//Fix My Phone Numbers! - 7kyu
//Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
//Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.


function isItANum(str) {
  let digits = str.replace(/[^0-9]/g, '');
  return digits.length==11 && digits.charAt(0)==0 ? digits : 'Not a phone number'
}
