// Middle Me - 7kyu
// Write a function that will take a key of X and place it in the middle of Y repeated N times.



function middleMe(N, X, Y){
  //get a working solution then try to make it less than 70 characters!
  return N % 2 == 0 ? (Y.repeat(N/2) + X + Y.repeat(N/2)) : X;
}
