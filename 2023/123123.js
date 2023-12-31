//How many e-mails we sent today? - 7kyu

function getPercentage(sent, limit){
  if (!sent) {
    return "No e-mails sent";
  }
  limit = limit ? limit : 1000;
  return sent<limit ? `${Math.floor((sent/limit) * 100)}%` : "Daily limit is reached";
}
