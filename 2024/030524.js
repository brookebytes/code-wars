//Fizz Buzz Cuckoo Clock - 7kyu

function fizzBuzzCuckooClock(time) {
  let minutes = Number(time.slice(time.indexOf(":")+1));
  let hour = Number(time.slice(0, time.indexOf(":")));
  let clockHour = hour > 12 ? hour-12 : hour==0 ? 12 : hour;

  if (minutes == 0) {
    return `${"Cuckoo ".repeat(clockHour).trim()}`
  } else if (minutes == 30) {
    return "Cuckoo"
  } else if (minutes%3==0 && minutes%5==0) {
    return "Fizz Buzz";
  } else if (minutes%3==0) {
    return "Fizz";
  } else if (minutes%5==0) {
    return "Buzz";
  } else {
    return "tick";
  }
}

