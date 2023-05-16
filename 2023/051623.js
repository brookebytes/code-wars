//Likes Vs Dislikes - 7kyu
// Create a function that takes in a list of button inputs and returns the final state.

function likeOrDislike(buttons) {
  let currentState = 'Nothing';
  buttons.forEach(button => currentState = (button==currentState ? 'Nothing' : button));
  return currentState;
}
