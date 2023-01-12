//Crash Override - 8kyu
/*Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
 * If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

*/

function aliasGen(){
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  firstNameInitial = arguments[0].charAt(0).toUpperCase();
  surnameInitial = arguments[1].charAt(0).toUpperCase();
  return  alphabet.includes(firstNameInitial) && alphabet.includes(surnameInitial) ? 
    `${firstName[firstNameInitial]} ${surname[surnameInitial]}` : 'Your name must start with a letter from A - Z.'; 
}
