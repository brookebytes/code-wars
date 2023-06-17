//Search JSON for any key value pair - 7kyu
/* You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.
 * He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches. */


function getCharacters(obj, key, val) {
  return obj["characters"].filter(c => {
    if(c[key]) {
      return c[key].toLowerCase()===val.toLowerCase();
    }
  });
}
