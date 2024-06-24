// Sir, showMe yourID - 7kyu
/* Using the function showMe, which takes a yourID argument, you will check if the given argument is a name or not, by returning true or false. */

function showMe(yourID) {
  return /^[A-Z]{1}[a-z]{1,}(-[A-Z]{1}[a-z]{1,})*$/.test(yourID);
}
