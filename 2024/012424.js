//Scrolling Text - 7kyu

function scrollingText(text){
  text = text.toUpperCase();
  let result = [text];
  for (i=1; i<text.length; i++) {
    text = text.slice(1)+text.slice(0,1);
    result.push(text);
  }
  return result;
}
