//The unknown but known variables - Addition - 7kyu
//Solve the puzzle

function theVar(theVariables) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.indexOf(theVariables.charAt(0)) + alphabet.indexOf(theVariables.charAt(2))+2;
}
