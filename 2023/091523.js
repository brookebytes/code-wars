//Log without dates - 7kyu
//

function checkLogs(log) {
  let count = 1;

  if (log.length < 1) {
    return log.length;
  }

  return log.reduce((acc, curr, i) => {
    if (curr < log[i-1] || curr == log[i-1]) {
      return acc+=1;
    }
    return acc;
  }, 1);

}
