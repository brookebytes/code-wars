//Help the bookseller! - 6kyu
/* You will be given a stocklist (e.g. : L) and a list of categories in capital letters and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category. */

function stockList(listOfArt, listOfCat){
  let result = '';
  if(listOfCat == null || listOfCat.length<1 || listOfArt == null || listOfArt.length<1) {
    return '';
  }
  listOfCat.forEach(letter => result += `(${letter} : ${listOfArt
                    .filter(book => book.charAt(0)==letter)
                    .reduce((acc,book) => acc+=parseInt(book.slice(book.indexOf(" ")+1,book.length)), 0)}) - `);
  return result.slice(0,result.length-3);
}
