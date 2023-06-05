//What's the real floor?
// Write a function that given a floor in the american system returns the floor in the european system.

const getRealFloor = n => n>=13 ? n-2 : n>0 ? n-1 : n;



