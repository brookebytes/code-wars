//Battle of the characters - 7kyu
// Create a function that will accept 2 strings and return the one who's stronger.

function battle(x, y) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";

  let xScore = x.split("").reduce((acc,letter) => acc+=alphabet.indexOf(letter.toLowerCase()),0);
  let yScore = y.split("").reduce((acc,letter) => acc+=alphabet.indexOf(letter.toLowerCase()),0);

  if (xScore==yScore) {
    return "Tie!";
  }
  return xScore > yScore ? x : y;
}
