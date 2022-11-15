//CamelCase Method - 6kyu
//All words must have their first letter capitalized without spaces

String.prototype.camelCase=function(){
  return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1,word.length)).join('');
}
