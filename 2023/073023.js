//max diff - 7kyu
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

function maxDiff(list) {
  return list.length > 0 ? Math.max(...list)-Math.min(...list) : 0;
};
