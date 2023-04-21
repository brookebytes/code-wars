//Emotional Sort ( ︶︿︶) - 6kyu
/* You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:
 *  :D -> Super Happy
 *  :) -> Happy
 *  :| -> Normal
 *  :( -> Sad
 *  T_T -> Super Sad
 * And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy).
 * All emotions will be valid. */

function sortEmotions(arr, order){
  const emotions = { ":D": 5, ":)": 4, ":|": 3, ":(": 2, "T_T": 1 }
  return order ? arr.sort((a,b) => emotions[b]-emotions[a]) : arr.sort((a,b) => emotions[a]-emotions[b]);
}
