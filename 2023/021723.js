//Title Case - 6kyu
/* Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.*/

function titleCase(title, minorWords) {
  if (title.length>0) {
    if (minorWords==undefined) {
      minorWords = '';
    }
    title = title.toLowerCase();
    minorWords = minorWords.toLowerCase().split(" ");
    let newTitle = title.split(" ").map(word => minorWords.includes(word) ? word : word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    return newTitle.charAt(0).toUpperCase()+newTitle.slice(1);
  }
  return title;
}

