//Find Cracker - 6kyu
/* Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score.
 * If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.
 * Returns the name of the hacked name as an array when scoring with this rule.*/

function findHack(arr) {
  const scores = {'A': 30, 'B': 20, 'C': 10, 'D':5}
  let hacked = [];
  
  arr.forEach(student => {
    let totalScore = student[2].reduce((acc, grade) => scores[grade] ? acc+scores[grade] : acc,0);
    
    if (student[2].length>=5 && student[2].every(grade => grade=='A'||grade=='B')) {
      totalScore+=20;
    }
    
    if (student[1] != totalScore || arr[1]>200) {
      hacked.push(student[0])
    }
    
  });
  
  return hacked;
}

