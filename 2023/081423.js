//How old will I be in 2009? - 8kyu
/* Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past. */

function  calculateAge() {
  let birthYear = arguments[0];
  let requestYear = arguments[1];

  if (birthYear == requestYear) {
    return "You were born this very year!";
  }
  if (requestYear-birthYear > 1) {
    return `You are ${requestYear-birthYear} years old.`;
  }
  if (birthYear-requestYear>1) {
    return `You will be born in ${birthYear-requestYear} years.`
  }
  return birthYear-requestYear<0 ? "You are 1 year old." : "You will be born in 1 year.";
}


