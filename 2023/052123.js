//Remove anchor from URL - 7kyu
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  return url.includes('#') ? url.slice(0,url.indexOf('#')) : url;
}
