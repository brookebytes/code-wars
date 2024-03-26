//Turn any word into a beef taco - 7kyu

function tacofy(word) {
  let taco = ["shell"];
  const key = {t: "tomato", l: "lettuce", c: "cheese", g: "guacamole", s: "salsa", a: "beef", e: "beef",
               i: "beef", o: "beef", u: "beef"};
  for (i=0; i<word.length; i++) {
    if (key[word[i].toLowerCase()]) {
      taco.push(key[word[i].toLowerCase()])
    }
  }
  taco.push("shell");
  return taco;
}
