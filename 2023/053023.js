//Extract the domain name from a URL - 5kyu
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function domainName(url){
  let res = '';

  if (url.includes("www")) {
    res = url.substring(url.indexOf('www.')+4)
  }
  else if (url.includes('//')) {
    res = url.substring(url.indexOf("//")+2);
  }
  return res ? res.substring(0, res.indexOf('.')) : url.substring(0, url.indexOf('.'));
}
