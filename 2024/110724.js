// How many points did the teams from Los Angeles score? 
// You are given an array including a list of basketball teams and their scores showing points scored vs points lost
// Your task is to return a number that represents the total number of points scored by a team from Los Angeles.

function getLosAngelesPoints(results) {
  return results
    .filter(arr => arr[0].match(/Los Angeles [A-Z]{1}[a-zA-Z]{1,}$/gm))
    .reduce((acc, cur) => acc+Number(cur[1].slice(0,cur[1].indexOf(":"))),0);
}
