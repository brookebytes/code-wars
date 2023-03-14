//Find out whether the shape is a cube - 8kyu
// With the given volume and the length of a side, find out whether the cuboid has equal sides (= is a cube)

var cubeChecker = function(volume, side){
  return volume>0 && side>0 && side*side*side===volume;
};
